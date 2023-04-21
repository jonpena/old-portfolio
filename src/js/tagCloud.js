const createTagCloud = (options) => {
  window.TagCloud('.sphere-container', Array(16).fill(''), options);
  document.querySelector('.tagcloud').style.width = '100%';
  document.querySelector('.tagcloud').style.height = '470px';
};

const updateTagCloud = (mq, options) => {
  const $sphere = document.querySelector('.sphere-container');
  options.radius = mq.matches ? 360 : 230;
  $sphere.removeChild($sphere.childNodes[0]);
  createTagCloud(options);
};

export { createTagCloud, updateTagCloud };
