const json = (body, status = 200) => new Response(JSON.stringify(body), {
  status,
  headers: { 'content-type': 'application/json; charset=utf-8' },
});

const clean = (value, max) => String(value || '').trim().slice(0, max);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const data = await request.json();
        if (data.website) return json({ success: true });

        const name = clean(data.name, 100);
        const email = clean(data.email, 160);
        const phone = clean(data.phone, 60);
        const subject = clean(data.subject, 100);
        const message = clean(data.message, 4000);

        if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          return json({ success: false, error: 'Bitte füllen Sie alle Pflichtfelder korrekt aus.' }, 400);
        }

        await env.EMAIL.send({
          to: 'info@seehafen-immobilien.ch',
          from: 'website@seehafen-immobilien.ch',
          replyTo: email,
          subject: `Website-Anfrage: ${subject || 'Allgemeine Anfrage'}`,
          text: `Name: ${name}\nE-Mail: ${email}\nTelefon: ${phone || 'Nicht angegeben'}\nThema: ${subject || 'Allgemeine Anfrage'}\n\nNachricht:\n${message}`,
        });

        return json({ success: true });
      } catch (error) {
        console.error('Contact form error', error);
        return json({ success: false, error: 'Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.' }, 500);
      }
    }

    if (url.pathname === '/api/contact') return json({ success: false }, 405);
    return env.ASSETS.fetch(request);
  },
};
