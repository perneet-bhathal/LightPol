import React from 'react';
import './LightPollutionInfo.css';

const LightPollutionInfo = ({ onBack, onAnimalVisualizer }) => {
  return (
    <div className="information-container">
      <div className="information-text">
        <p>
          Light pollution is a pervasive consequence of urbanization and modern civilization's dependence on artificial lighting. Its detrimental effects on the environment, particularly wildlife, are increasingly evident worldwide, with San Diego serving as a poignant case study. In this coastal metropolis of Southern California, the glow of city lights mingles with the stars above, creating a luminous veil that disrupts natural nocturnal rhythms and ecosystems.
        </p>
        <p>
          One of the most profound impacts of light pollution is its disruption of wildlife behavior and ecology. Nocturnal animals, including insects, birds, and mammals, rely on the cover of darkness for essential activities such as foraging, mating, and navigation. However, artificial lighting confuses these creatures, leading to disorientation, altered feeding patterns, and reduced reproductive success. For instance, sea turtles, native to San Diego's coastal waters, depend on the natural light of the moon to guide their hatchlings to the ocean. However, excessive artificial light from beachfront developments can disorient these hatchlings, leading them away from the sea and towards dangerous roads or predator-rich environments.
        </p>
        <p>
          Moreover, light pollution interferes with the biological rhythms of plants and animals, disrupting natural processes such as migration, hibernation, and flowering. Many species rely on cues from the natural light-dark cycle to synchronize their internal clocks and regulate physiological functions. Artificial lighting at night can throw these rhythms out of sync, leading to stress, decreased immune function, and reproductive abnormalities.
        </p>
        <p>
          In San Diego, where biodiversity flourishes in its diverse ecosystems ranging from coastal habitats to inland canyons, the impacts of light pollution are particularly concerning. Species such as migratory birds, which navigate long distances using celestial cues, are at risk of becoming disoriented and colliding with brightly lit buildings or communication towers. Additionally, the region's rich marine life, including dolphins, whales, and bioluminescent organisms, may suffer from disrupted feeding patterns and altered predator-prey dynamics due to artificial light intrusion into their ocean habitats.
        </p>
        <p>
          Efforts to mitigate light pollution in San Diego and beyond are crucial for safeguarding the region's biodiversity and ecological integrity. Implementing responsible outdoor lighting practices, such as shielding light fixtures, using energy-efficient bulbs, and employing motion sensors, can help reduce unnecessary light spillage and glare. Furthermore, raising awareness among the public about the importance of preserving natural darkness and its benefits for wildlife and human health is essential for fostering a culture of conservation and sustainable development. By taking concerted action to combat light pollution, San Diego and other urban areas can preserve the beauty of the night sky and protect the delicate balance of ecosystems for generations to come.
        </p>
      </div>
      <div className="button-container">
        <button className="back-button" onClick={onBack}>Back to Visualizer</button>
        <button className="animal-visualizer-button" onClick={onAnimalVisualizer}>Go to Animal Visualizer</button>
      </div>
    </div>
  );
};

export default LightPollutionInfo;