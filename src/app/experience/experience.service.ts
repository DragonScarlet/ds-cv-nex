import { Injectable } from '@angular/core';
import {Job} from "./job-panel/Job";
import {Project} from "./job-panel/project-panel/Project";

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  jobs : Job[] = [
    new Job('Profesional Consultant',
      'bbv Software Services GmbH',
      'assets/companies/bbv_Rakete.svg',
      '2020.07 - 2022.09',
      [
      ]
    ),
    new Job('Senior IT Consultant',
      'MSG Nexinsure',
      'assets/companies/msg2.png',
      '2020.07 - 2022.09',
      [
        new Project('Component Architect', '2 years', 'Worked as a Component Architect for insurance software company. Ensuring software follows the company technical requirements.'),
      ]
    ),
    new Job('Senior IT Consultant',
      'Aequitas',
      'assets/companies/aequitas2.png',
      '2018.10 - 2020.06',
      [
        new Project('Frontend-Backend', '2 years', 'Developed and maintained insurance software using Java,SF, Springboot, SQL, SOAP, xHTML, JIRA and Jenkins.'),
      ]
    ),
    new Job('IT Consultant',
      'MVI Solve IT',
      'assets/companies/mvi2.png',
      '2015.09 - 2018.09',
      [
        new Project('Frontend-Backend', '1/2 year', 'Finished developing a JSF application.'),
        new Project('Frontend-Backend', '2 years', 'Responsible for developing front and backend web applications using AngularJS, JQuery, HTML, CSS, SQL and Java.'),
        new Project('Tester', '1 year', 'Developed automatic and manual tests for VW Car-Net Japan using HP UFT and ALM.'),
      ]
    ),
    new Job('Research Assistant',
      'Technische Universität Darmstadt',
      'assets/companies/tud.svg',
      '2013.09 - 2015.08',
      [
        new Project('Research Assistant', '2 year', 'Ported computer serious games to android using C#. Analyzed and represented data using IPython notebook.')
      ]
    ),
    new Job('Researcher',
      'Nagaoka University of Technology',
      'assets/companies/nagaoka.png',
      '2012.09 - 2013.08',
      [
      new Project('Research Assistant', '1 year', 'Developed two applications using Electromyography (EMG) sensors with unity and C++.')
    ]
    ),
  ];

  constructor() { }

  getJobs(){
    return this.jobs;
  }
}
