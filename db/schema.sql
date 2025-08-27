-- Caribbean Fairy Tale Tours Database Schema
DROP TABLE IF EXISTS tours;
DROP TABLE IF EXISTS bookings;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS destinations;

-- Destinations table
CREATE TABLE destinations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    image_url TEXT,
    featured BOOLEAN DEFAULT FALSE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Tours table
CREATE TABLE tours (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    description TEXT,
    price DECIMAL(10,2) NOT NULL,
    duration_hours INTEGER NOT NULL,
    max_capacity INTEGER NOT NULL,
    image_url TEXT,
    destination_id INTEGER,
    featured BOOLEAN DEFAULT FALSE,
    active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (destination_id) REFERENCES destinations(id)
);

-- Customers table
CREATE TABLE customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Bookings table
CREATE TABLE bookings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tour_id INTEGER NOT NULL,
    customer_id INTEGER NOT NULL,
    booking_date DATE NOT NULL,
    number_of_people INTEGER NOT NULL,
    total_amount DECIMAL(10,2) NOT NULL,
    status TEXT DEFAULT 'pending',
    booking_reference TEXT UNIQUE NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (tour_id) REFERENCES tours(id),
    FOREIGN KEY (customer_id) REFERENCES customers(id)
);

-- Insert sample destinations
INSERT INTO destinations (name, description, featured) VALUES
('Punta Cana Beach', 'Beautiful white sand beaches with crystal clear waters', TRUE),
('Santo Domingo Historic', 'Colonial architecture and rich history', TRUE),
('Saona Island', 'Paradise island with pristine beaches', FALSE),
('El Limón Waterfall', 'Spectacular waterfall in tropical rainforest', FALSE);

-- Insert sample tours
INSERT INTO tours (title, description, price, duration_hours, max_capacity, destination_id, featured) VALUES
('Beach Paradise Tour', 'Relax on pristine beaches with complimentary drinks and snorkeling equipment', 89.99, 8, 25, 1, TRUE),
('Colonial History Walking Tour', 'Explore the first European city in the Americas with expert guides', 45.99, 4, 15, 2, TRUE),
('Saona Island Adventure', 'Full day excursion to the most beautiful island in the Caribbean', 129.99, 10, 30, 3, TRUE),
('Waterfall Hiking Experience', 'Trek through tropical forests to reach the stunning El Limón waterfall', 75.99, 6, 20, 4, FALSE);