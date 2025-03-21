// src/utils/imageMappings.ts

const imageMap: { [key: string]: any } = {
    // Icons
    "steam-science.png": require("../assets/icons/steam-science.png"),
    "steam-tech.png": require("../assets/icons/steam-tech.png"),
    "steam-engine.png": require("../assets/icons/steam-engine.png"),
    "steam-art.png": require("../assets/icons/steam-art.png"),
    "steam-math.png": require("../assets/icons/steam-math.png"),
    "science.png": require("../assets/icons/science.png"),
    "tech.png": require("../assets/icons/tech.png"),
    "engineering.png": require("../assets/icons/engineering.png"),
    "art.png": require("../assets/icons/art.png"),
    "math.png": require("../assets/icons/math.png"),
    
  
    // Images
    "dna.png": require("../assets/images/dna.png"),
    "space.png": require("../assets/images/space.png"),
    "ai.png": require("../assets/images/ai.png"),
    "robot.png": require("../assets/images/robot.png"),
    "digital-art.png": require("../assets/images/digital-art.png"),
    "fractal.png": require("../assets/images/fractal.png"),
    "eco.png": require("../assets/images/eco.png"),
    "brain.png": require("../assets/images/brain.png"),
    "chem.png": require("../assets/images/chem.png"),
    "quantum.png": require("../assets/images/quantum.png"),
    "evolution.png": require("../assets/images/evolution.png"),
    "iot.png": require("../assets/images/iot.png"),
    "app-dev.png": require("../assets/images/app-dev.png"),
    "cyber.png": require("../assets/images/cyber.png"),
    "vr.png": require("../assets/images/vr.png"),
    "big-data.png": require("../assets/images/big-data.png"),
    "eolica.png": require("../assets/images/eolica.png"),
    "factory.png": require("../assets/images/factory.png"),
    "drone.png": require("../assets/images/drone.png"),
    "biomed.png": require("../assets/images/biomed.png"),
    "3d-printing.png": require("../assets/images/3d-printing.png"),
    "nano.png": require("../assets/images/nano.png"),
    "animation.png": require("../assets/images/animation.png"),
    "music.png": require("../assets/images/music.png"),
    "photo.png": require("../assets/images/photo.png"),
    "graffiti.png": require("../assets/images/graffiti.png"),
    "sculpture.png": require("../assets/images/sculpture.png"),
    "generative.png": require("../assets/images/generative.png"),
    "stats.png": require("../assets/images/stats.png"),
    "algebra.png": require("../assets/images/algebra.png"),
    "crypto.png": require("../assets/images/crypto.png"),
    "finance.png": require("../assets/images/finance.png"),
    "topology.png": require("../assets/images/topology.png"),
    "calculus.png": require("../assets/images/calculus.png"),
    "dna-microscope.png" : require("../assets/images/dna.png"),
    "dna-banner.jpg" : require("../assets/images/dna-banner.jpg"),

    "space-banner.jpg" : require("../assets/images/space-banner.jpg"),
    "galaxy.jpg" : require("../assets/images/galaxy.jpg"),
    "eco-banner.jpg" : require("../assets/images/eco-banner.jpg"),
    "biodiversity.jpg" : require("../assets/images/biodiversity.jpg"),
    "brain-banner.jpg" : require("../assets/images/brain-banner.jpg"),
    "neurons.jpg" : require("../assets/images/neurons.jpg"),
    "chem-banner.jpg" : require("../assets/images/chem-banner.jpg"),
    "molecules.jpg" : require("../assets/images/molecules.jpg"),
    "quantum-banner.jpg" : require("../assets/images/quantum-banner.jpg"),
    "particles.jpg" : require("../assets/images/particles.jpg"),
  };
  
  export const getImageSource = (imagePath: string) => {
    return imageMap[imagePath] || require("../assets/icons/science.png");
  };