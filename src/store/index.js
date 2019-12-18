import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";

Vue.use(Vuex);
// TODO: outline what each data section includes represented with JSON
export default new Vuex.Store({
  state: {
    sections: [
      {
        text: "Personal Info",
        icon: ['far', 'user'],
        key: "PersonalInfo",
        current: true
      },
      {
        text: "Objective",
        icon: ['fas', 'bullseye'],
        key: "Objective",
        current: false
      },
      {
        text: "Work Experience",
        icon: ['fas', 'suitcase'],
        key: "WorkExp",
        current: false
      },
      {
        text: "Education",
        icon: ["fas", "book"],
        key: "Education",
        current: false
      },
      {
        text: "Languages",
        icon: ["fas", "globe-americas"],
        key: "Languages",
        current: false
      },
      {
        text: "Skills",
        icon: ["fas", "flask"],
        key: "Skills",
        current: false
      },
      {
        text: "Achievements",
        icon: ["fas", "medal"],
        key: "Achievements",
        current: false
      },
      {
        text: "Organizations",
        icon: ["fas", "sitemap"],
        key: "Organizations",
        current: false
      }
    ],
    personalInfo: JSON.parse(localStorage.getItem("resume-personalInfo")) || {
      firstName: "",
      lastName: "",
      email: "",
      region: "",
      city: "",
      link: ""
    },
    educationData: JSON.parse(localStorage.getItem("resume-education")) || [
      {
        institutionName: "",
        fieldOfStudy: "",
        region: "",
        city: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        isCurrent: false,
        idx: 0,
        expanded: false
      }
    ],
    workExperienceData: JSON.parse(
      localStorage.getItem("resume-workExperience")
    ) || [
      {
        title: "",
        companyName: "",
        region: "",
        city: "",
        startMonth: "",
        startYear: "",
        endMonth: "",
        endYear: "",
        isCurrent: false,
        expanded: false,
        description: "",
        idx: 0
      }
    ],
    objective: localStorage.getItem("resume-objective") || "",
    languages: JSON.parse(localStorage.getItem("resume-languages")) || [],
    skills: JSON.parse(localStorage.getItem("resume-skills")) || [],
    achievements: JSON.parse(localStorage.getItem("resume-achievements")) || [], //[{title: string, description: string, idx: number, expanded: boolean}]
    organizations: JSON.parse(localStorage.getItem("resume-organizations")) || [], //[{name: string, position: string, idx: number, expanded: boolean}]
    settings: JSON.parse(localStorage.getItem('resume-settings')) || { template: { text: "Basic Template", value: "basic"}, "color": { "text": "blue", "hex": "#0000ff"}}
  },
  actions,
  mutations
});
