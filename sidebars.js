/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  regelverkSidebar: [
    'intro',
    'architecture',
    'relationships',
    {
      type: 'category',
      label: 'Avtalsmallar',
      collapsed: false,
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
    {
      type: 'category',
      label: 'Guider',
      items: [
        'guider/for-anslutningsoperatorer',
        'guider/for-federationsmedlemmar',
      ],
    },
    'forvaltning-och-synpunkter',
  ],
};

export default sidebars;
