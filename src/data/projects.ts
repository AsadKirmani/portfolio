export type Project = {
  name: string; status: string; mark: string; tone: string; description: string; stack: string; live: string; github: string;
};

export const projects = [

  {

    name: "Taskflow",

    status: "Live",

    mark: "TF",

    tone: "mint",

    description:

      "A collaborative Kanban workspace for managing boards, tasks, and team permissions.",

    stack: "Angular · Node.js · TypeScript",

    live: "https\://taskflow\.kidrauhl.in",

    github: "https\://github.com/AsadKirmani/taskflow",

  },

  {

    name: "Medico",

    status: "Live",

    mark: "M",

    tone: "blue",

    description:

      "A pharmacy management system for medicines, inventory, orders, and reporting.",

    stack: "React · Spring Boot · MongoDB",

    live: "https\://medico-12ed5.web.app",

    github: "https\://github.com/AsadKirmani/medico",

  },

  {

    name: "Word Hunt",

    status: "Live",

    mark: "WH",

    tone: "amber",

    description:

      "A lightweight dictionary experience for discovering words and their meanings.",

    stack: "React · JavaScript · API integration",

    live: "https\://amazing-dictionary.web.app/",

    github: "https\://github.com/AsadKirmani/word_hunt",

  },

] as Project[];
