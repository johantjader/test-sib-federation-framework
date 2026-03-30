/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // 1. "Om Samordnad identitet och behörighet"
  omSidebar: [
    'intro',
    'architecture',
    'relationships',
  ],

  // 2. "Regelverk"
  regelverkSidebar: [
    {
      type: 'category',
      label: 'Avtalsmallar',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Avtalsmallar',
        description:
          'Federationsplattformens avtalsmallar skapar formella rättsliga relationer mellan parterna. Varje avtalsmall inkorporerar villkorsbilagorna som bindande villkor.',
      },
      items: [
        'avtal/fed-op-avtal',
        'avtal/ans-op-avtal',
        'avtal/fm-forbindelse',
      ],
    },
    {
      type: 'category',
      label: 'Villkorsbilagor',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Villkorsbilagor',
        description:
          'Villkorsbilagorna (A\u2013G) anger vad som ska uppn\u00e5s. De \u00e4r gemensamma f\u00f6r alla federationskontexter och inkorporeras i avtalsmallarna som bindande villkor.',
      },
      items: [
        'bilagor/bilaga-a-definitioner',
        'bilagor/bilaga-b-krav-infrastrukturtjanster',
        'bilagor/bilaga-c-krav-medlemskomponenter',
        'bilagor/bilaga-d-tekniska-specifikationer',
        'bilagor/bilaga-e-forandringspolicy',
        'bilagor/bilaga-f-federationsregler',
        'bilagor/bilaga-g-ansvarsbegransningar',
      ],
    },
  ],

  // 3. "Guider"
  guiderSidebar: [
    {
      type: 'category',
      label: 'Guider',
      collapsed: false,
      link: {
        type: 'generated-index',
        title: 'Guider',
        description:
          'Guiderna \u00e4r informativa och hj\u00e4lper dig att f\u00f6rst\u00e5 regelverket utifr\u00e5n din roll. F\u00f6r bindande regler, se villkorsbilagorna och avtalsmallarna.',
      },
      items: [
        'guider/for-anslutningsoperatorer',
        'guider/for-federationsmedlemmar',
      ],
    },
  ],

  // 4. "Om regelverket"
  omRegelverketSidebar: [
    'forvaltning-och-synpunkter',
  ],
};

export default sidebars;
