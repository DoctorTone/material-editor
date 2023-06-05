const SCENE = {
  cameraPosition: [0, 0, 30],
  ambientIntensity: 10.5,
  lightPosition: [10, 10, 10],
  fov: 45,
};

const getDeviceStatus = () => {
  // See if mobile
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    // Must be desktop
    return false;
  }
};

export { SCENE, getDeviceStatus };
