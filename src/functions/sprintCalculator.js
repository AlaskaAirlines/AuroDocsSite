const firstSprintStartDate = new Date("12/28/2022");
const currentYear = new Date().getFullYear();
const sprintDurationInDays = 14;

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

  // console.log(sprintDays)
  // console.log(numberOfSprints)

  for (let i = numberOfSprints - 13; i <= numberOfSprints; i++) {
    const startDateModifier = sprintDurationInDays * (i - 1);
    const endDateModifier = sprintDurationInDays * i -1;
    const startDate = addDays(firstSprintStartDate, startDateModifier);
    const endDate = addDays(firstSprintStartDate, endDateModifier);

    // console.log(startDate)

    if (i > 0) {
      sprints.push({
        sprintName: ` ${i === numberOfSprints ? `Current` : ''} Sprint ${i}.${currentYear.toString().substring(2)}`,
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
