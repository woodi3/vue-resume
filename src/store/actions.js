export default {
  editSection({ commit }, section) {
    commit("editSection", section);
  },
  addEducation({ commit }, education) {
    commit("addEducation", education);
  },
  removeEducation({ commit }, education) {
    commit("removeEducation", education);
  },
  editEducation({ commit }, education) {
    commit("editEducation", education);
  },
  addWorkExperience({ commit }, workExp) {
    commit("addWorkExperience", workExp);
  },
  removeWorkExperience({ commit }, workExp) {
    commit("removeWorkExperience", workExp);
  },
  editWorkExperience({ commit }, workExp) {
    commit("editWorkExperience", workExp);
  },
  editPersonalInfo({ commit }, personalInfo) {
    commit("editPersonalInfo", personalInfo);
  },
  editObjective({ commit }, objective) {
    commit("editObjective", objective);
  },
  addLanguage({ commit }, language) {
    commit("addLanguage", language);
  },
  removeLanguage({ commit }, language) {
    commit("removeLanguage", language);
  },
  addSkill({ commit }, skill) {
    commit("addSkill", skill);
  },
  removeSkill({ commit }, skill) {
    commit("removeSkill", skill);
  },
  saveLocalStorage({ commit }, obj) {
    commit("saveLocalStorage", obj);
  },
  addAchievement({ commit }, achievement) {
    commit("addAchievement", achievement);
  },
  removeAchievement({ commit }, achievement) {
    commit("removeAchievement", achievement);
  },
  editAchievement({ commit }, achievement) {
    commit("editAchievement", achievement);
  },
  addOrganization({ commit }, organization) {
    commit("addOrganization", organization);
  },
  removeOrganization({ commit }, organization) {
    commit("removeOrganization", organization);
  },
  editOrganization({ commit }, organization) {
    commit("editOrganization", organization);
  },
  changeColor({commit}, color){
    commit("changeColor", color);
  }
};
