const getMinDistYProject = (projects) => {
  const rectCenterY = (el) => {
    return(
      el.getBoundingClientRect().top +
        (
          el.getBoundingClientRect().bottom -
          el.getBoundingClientRect().top
        ) / 2
    );
  }
  const windowCenterY = window.innerHeight / 2;
  const distToCenterY = (el) => Math.abs(rectCenterY(el) - windowCenterY);

  let minDistY = Infinity;
  let minDistYProject;
  Object.keys(projects).forEach((projectName) => {
    const projectsDistsY = distToCenterY(projects[projectName].ref);
    if (projectsDistsY < minDistY) {
      minDistY = projectsDistsY;
      minDistYProject = projectName;
    }
  });

  return minDistYProject;
};

export default getMinDistYProject;
