export default {
  async fetch(request, env) {
    const key = new URL(request.url).pathname.slice(1);

    if (key) {
      const obj = await env.CLIENTPATCH.get(key);
      if (obj) {
        return new Response(obj.body);
      }
    }

    return Response.redirect(
      "https://prod-clientpatch.bluearchiveyostar.com/" + key,
      302
    );
  },
};