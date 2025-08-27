globalThis.process ??= {}; globalThis.process.env ??= {};
export { r as renderers } from '../../chunks/astro_DOplfWg6.mjs';

const GET = async ({ request }) => {
  try {
    const env = request.cf?.env || {};
    const DB = env.DB;
    if (!DB) {
      return new Response(JSON.stringify({ error: "Database not available" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    const result = await DB.prepare(`
      SELECT t.*, d.name as destination_name, d.description as destination_description
      FROM tours t 
      LEFT JOIN destinations d ON t.destination_id = d.id 
      WHERE t.featured = 1 AND t.active = 1
      ORDER BY t.created_at DESC
      LIMIT 3
    `).all();
    return new Response(JSON.stringify({
      success: true,
      tours: result.results || []
    }), {
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Database error:", error);
    return new Response(JSON.stringify({
      error: "Failed to fetch tours",
      details: error.message
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
