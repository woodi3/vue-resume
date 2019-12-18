export default {
  editSection(
    state,
    { section, current = section.current, key = section.key }
  ) {
    const dataIdx = state.sections.findIndex(s => s.key === key);
    if (dataIdx > -1) {
      state.sections[dataIdx].current = current;
    }
  },
  addEducation(state, education) {
    state.educationData.push(education);
  },
  removeEducation(state, education) {
    state.educationData.splice(
      state.educationData.findIndex(e => e.idx === education.idx),
      1
    );
    state.educationData.forEach((e, i) => e.idx = i);
  },
  editEducation(
    state,
    {
      education,
      institutionName = education.institutionName,
      fieldOfStudy = education.fieldOfStudy,
      region = education.region,
      city = education.city,
      startMonth = education.startMonth,
      startYear = education.startYear,
      endMonth = education.endMonth,
      endYear = education.endYear,
      isCurrent = education.isCurrent,
      idx = education.idx,
      expanded = education.expanded
    }
  ) {
    const dataIdx = state.educationData.findIndex(w => w.idx === idx);
    if (dataIdx > -1) {
      const data = state.educationData[dataIdx];
      data.institutionName = institutionName;
      data.fieldOfStudy = fieldOfStudy;
      data.region = region;
      data.city = city;
      data.startMonth = startMonth;
      data.startYear = startYear;
      data.endMonth = endMonth;
      data.endYear = endYear;
      data.isCurrent = isCurrent;
      data.idx = idx;
      data.expanded = expanded;
    }
  },
  addWorkExperience(state, workExp) {
    state.workExperienceData.push(workExp);
  },
  removeWorkExperience(state, workExp) {
    state.workExperienceData.splice(
      state.workExperienceData.findIndex(w => w.idx === workExp.idx),
      1
    );
    state.workExperienceData.forEach((w, i) => w.idx = i);
  },
  editWorkExperience(
    state,
    {
      workExp,
      title = workExp.title,
      companyName = workExp.companyName,
      region = workExp.region,
      city = workExp.city,
      startMonth = workExp.startMonth,
      startYear = workExp.startYear,
      endMonth = workExp.endMonth,
      endYear = workExp.endYear,
      isCurrent = workExp.isCurrent,
      description = workExp.description,
      idx = workExp.idx,
      expanded = workExp.expanded
    }
  ) {
    const dataIdx = state.workExperienceData.findIndex(w => w.idx === idx);
    if (dataIdx > -1) {
      const data = state.workExperienceData[dataIdx];
      data.title = title;
      data.companyName = companyName;
      data.region = region;
      data.city = city;
      data.startMonth = startMonth;
      data.startYear = startYear;
      data.endMonth = endMonth;
      data.endYear = endYear;
      data.isCurrent = isCurrent;
      data.description = description;
      data.idx = idx;
      data.expanded = expanded;
    }
  },
  editPersonalInfo(
    state,
    {
      personalInfo,
      firstName = personalInfo.firstName,
      lastName = personalInfo.lastName,
      email = personalInfo.email,
      region = personalInfo.region,
      city = personalInfo.city,
      link = personalInfo.link
    }
  ) {
    state.personalInfo.firstName = firstName;
    state.personalInfo.lastName = lastName;
    state.personalInfo.email = email;
    state.personalInfo.region = region;
    state.personalInfo.city = city;
    state.personalInfo.link = link;
  },
  saveLocalStorage(state, { key, value }) {
    localStorage.setItem(key, value);
  },
  editObjective(state, objective) {
    state.objective = objective;
  },
  addLanguage(state, language) {
    state.languages.push(language);
  },
  removeLanguage(state, language) {
    state.languages.splice(state.languages.indexOf(language), 1);
  },
  addSkill(state, skill) {
    state.skills.push(skill);
  },
  removeSkill(state, skill) {
    state.skills.splice(state.skills.indexOf(skill), 1);
  },
  addAchievement(state, achievement){
    state.achievements.push(achievement);
  },
  removeAchievement(state, achievement){
    state.achievements.splice(
      state.achievements.findIndex(a => a.idx === achievement.idx),
      1
    );
    state.achievements.forEach((a, i) => (a.idx = i));
  },
  editAchievement(state, {
    achievement, 
    title = achievement.title,
    description = achievement.description,
    idx = achievement.idx,
    expanded = achievement.expanded
  }){
    const dataIdx = state.achievements.findIndex(a => a.idx === idx);
    if(dataIdx > -1){
      state.achievements[dataIdx].title = title;
      state.achievements[dataIdx].description = description;
      state.achievements[dataIdx].idx = idx;
      state.achievements[dataIdx].expanded = expanded;
    }
  },
  addOrganization(state, organization){
    state.organizations.push(organization);
  },
  removeOrganization(state, organization){
    state.organizations.splice(
      state.organizations.findIndex(a => a.idx === organization.idx),
      1
    );
    state.organizations.forEach((s, i) => s.idx = i);
  },
  editOrganization(state, {
    organization, 
    name = organization.name,
    position = organization.position,
    idx = organization.idx,
    expanded = organization.expanded
  }){
    const dataIdx = state.organizations.findIndex(a => a.idx === idx);
    if(dataIdx > -1){
      state.organizations[dataIdx].name = name;
      state.organizations[dataIdx].position = position;
      state.organizations[dataIdx].idx = idx;
      state.organizations[dataIdx].expanded = expanded;
    }
  },
  changeColor(state, color){
    state.settings.color.text = color.text;
    state.settings.color.hex = color.hex;
  }
};
