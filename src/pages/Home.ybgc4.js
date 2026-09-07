// API Reference: https://www.wix.com/velo/reference/api-overview/introduction
// “Hello, World!” Example: https://learn-code.wix.com/en/article/hello-world
import wixData from 'wix-data';

$w.onReady(async function () {
  const [seiteRes, eventsRes] = await Promise.all([
    wixData.query('SeiteInhalte').eq('seite', 'home').find(),
    wixData.query('Events').ascending('sortierung').limit(3).find()
  ]);

  const seite = seiteRes.items[0];
  if (!seite) {
    console.error('Keine Zeile in SeiteInhalte mit seite="home" gefunden!');
    return;
  }

  // Zuweisung der Daten
  $w('#dorisHome1').data = {
    ...seite,
    events: eventsRes.items
  };
});