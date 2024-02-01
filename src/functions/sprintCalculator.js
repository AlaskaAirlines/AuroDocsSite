const firstSprintStartDate = new Date("5/20/2019");
const currentYear = new Date().getFullYear();
const sprintDurationInDays = 7;

const addDays = (date, days) => {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const calculateSprints = (date) => {
  const sprintTime = date.getTime() - firstSprintStartDate.getTime();
  const sprintDays = sprintTime / (1000 * 3600 * 24);
  const numberOfSprints = Math.ceil(sprintDays / sprintDurationInDays);
  const sprints = [];

  // how many sprints to show
  for (let i = numberOfSprints - 3; i <= numberOfSprints; i++) {
    const startDateModifier = sprintDurationInDays * (i - 1);
    const endDateModifier = sprintDurationInDays * i - 1;
    const startDate = addDays(firstSprintStartDate, startDateModifier);
    const endDate = addDays(firstSprintStartDate, endDateModifier);

    if (i > 0) {
      sprints.push({
        sprintName: ` ${i === numberOfSprints ? `Current` : ''} Release ${i}.${currentYear.toString().substring(2)}`,
        sprintStartDate: startDate,
        sprintEndDate: endDate,
        releases: []
      });
    }
  }
  return sprints;
}

const createSprintReleaseDataset = (sprints, repositories) => {
  repositories.forEach(repository => {
    repository.releases.nodes.forEach(release => {
      sprints.forEach(sprint => {
        const releaseDate = new Date(release.createdAt);
        if (sprint.sprintStartDate.getTime() <= releaseDate.getTime() && releaseDate.getTime() <= sprint.sprintEndDate.getTime()) {
          sprint.releases.push({
            name: repository.name,
            description: release.description
          });
        }
      });
    });
  });
  return sprints.sort(compareSprints);
}

const compareSprints = (a, b) => {
  if (a.sprintStartDate > b.sprintStartDate) {
    return -1;
  }
  return 1;
}

export default calculateSprints;
export { createSprintReleaseDataset };
