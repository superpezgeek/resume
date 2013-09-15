angular.module('resumeApp', [])
    .controller('resumeCtrl', ['$scope', '$window', function($scope, $window){
        var SKILL_TYPE = $scope.SKILL_TYPE = {
            language: 1,
            frameworkSlashLibrary: 2,
            dataRepository: 3
        };

        $scope.resume = {
            name: "Dominic Riccardi",
            email: "DJRiccardi@gmail.com",
            professionalInfo: "Over seven years experience designing, developing, and maintaining web applications using both Microsoft and open-source, client-side technologies to solve internal and client-facing business problems. Able to quickly learn and understand new concepts, technologies, and methodologies. Responds positively to challenges, and provides innovative solutions to complex problems.",
            workExperience: [
                {
                    title: "Senior Software Engineer",
                    company: "Hiperos",
                    location: "Bridgeville, PA",
                    start: "February 2011",
                    end: "Present",
                    description: "Development, maintenance, and redesign of ASP.NET Web Forms third party management SaaS solution. Team lead of \"New UI\" team, responsible for updating application architecture to ASP.NET MVC, as well as updating application UI. Provide technical leadership to junior engineers.",
                    accomplishments: [
                        "Reduced execution time of business critical functionality by 90%",
                        "Promoted to Senior Software Engineer, and given role of Team Lead on the \"New UI\" team",
                        "Introduced Google's AngularJS framework to make front-end code less complicated and easily unit testable",
                        "Designed process (using Google's AngularJS framework) that generates dynamic web forms, based on a user-configurable data dictionary"
                    ],
                    skillsUsed: [
                        { name: "C#", type: SKILL_TYPE.language },
                        { name: "JavaScript", type: SKILL_TYPE.language },
                        { name: "HTML", type: SKILL_TYPE.language },
                        { name: "CSS", type: SKILL_TYPE.language },
                        { name: "AngularJS", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "jQuery", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "ASP.NET MVC", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "ASP.NET Web Forms", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "MS SQL Server", type: SKILL_TYPE.dataRepository },
                        { name: "MongoDB", type: SKILL_TYPE.dataRepository }
                    ]
                },
                {
                    title: "Technical Developer",
                    company: "Five Star Development",
                    location: "Pittsburgh, PA",
                    start: "February 2009",
                    end: "February 2011",
                    description: "Design, development, and maintenance of several custom ASP.NET Web Forms and ASP.NET MVC applications. Primarily focused on Visa CAPS (Content Authoring and Publication) project: a custom content management system that allows operating regulations to be published to users worldwide.",
                    accomplishments: [
                        "Developed a PDF generation process to replace a months-long process of manually printing and shipping operating regulation manuals to member banks worldwide",
                        "Solved technical limitation of making out-of-the-box ASP.NET Web Service projects work correctly in Visa's secure hosting environment",
                        "Designed and developed a custom CMS for American University's Emergency Preparedness Plan"
                    ],
                    skillsUsed: [
                        { name: "C#", type: SKILL_TYPE.language },
                        { name: "JavaScript", type: SKILL_TYPE.language },
                        { name: "HTML", type: SKILL_TYPE.language },
                        { name: "CSS", type: SKILL_TYPE.language },
                        { name: "XQuery", type: SKILL_TYPE.language },
                        { name: "XSL", type: SKILL_TYPE.language },
                        { name: "XSL:FO", type: SKILL_TYPE.language },
                        { name: "jQuery", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "ASP.NET Web Forms", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "ASP.NET MVC", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "MS SQL Server", type: SKILL_TYPE.dataRepository },
                        { name: "MarkLogic", type: SKILL_TYPE.dataRepository }
                    ]
                },
                {
                    title: "Application Developer",
                    company: "ALGOR",
                    location: "Blawnox, PA",
                    start: "May 2007",
                    end: "January 2009",
                    description: "Development and maintenance of several business critical internal-facing Windows Forms applications (e.g., customer relationship management and issue tracking systems). Development and maintenance of shared business logic and data access components in C# using the Microsoft Enterprise Library for .NET Framework.",
                    accomplishments: [
                        "Implemented Visual Studio 2008 Team Foundation Server for setting up development environment and source control for team projects"
                    ],
                    skillsUsed: [
                        { name: "C#", type: SKILL_TYPE.language },
                        { name: "XSL", type: SKILL_TYPE.language },
                        { name: "XSL:FO", type: SKILL_TYPE.language },
                        { name: "ASP.NET Windows Forms", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "MS SQL Server", type: SKILL_TYPE.dataRepository }
                    ]
                },
                {
                    title: "Systems Analyst",
                    company: "University of Pittsburgh",
                    location: "Pittsburgh, PA",
                    start: "November 2005",
                    end: "May 2007",
                    description: "Development and maintenance of online reporting and corporate intranet applications. Implementation Recruitment Plus, which included writing and documenting communication flow rules, and mapping business processes. Responsible for maintaining the integrity of undergraduate admissions and recruitment database.",
                    accomplishments: [
                        "Finished bachelors degree part-time while working full-time",
                        "Self-taught ASP.NET Web Forms and C#"
                    ],
                    skillsUsed: [
                        { name: "C#", type: SKILL_TYPE.language },
                        { name: "HTML", type: SKILL_TYPE.language },
                        { name: "CSS", type: SKILL_TYPE.language },
                        { name: "ASP.NET Web Forms", type: SKILL_TYPE.frameworkSlashLibrary },
                        { name: "MS SQL Server", type: SKILL_TYPE.dataRepository }
                    ]
                }
            ],
            education: [
                {
                    name: "University of Pittsburgh",
                    degree: "Bachelor of Science",
                    fieldOfStudy: "Computer Science",
                    start: "2002",
                    end: "2007"
                }
            ],
            skills: [
                { name: "JavaScript", type: SKILL_TYPE.language },
                { name: "HTML", type: SKILL_TYPE.language },
                { name: "CSS", type: SKILL_TYPE.language },
                { name: "C#", type: SKILL_TYPE.language },
                { name: "Java", type: SKILL_TYPE.language },
                { name: "Python", type: SKILL_TYPE.language },
                { name: "PHP", type: SKILL_TYPE.language },
                { name: "XQuery", type: SKILL_TYPE.language },
                { name: "XML", type: SKILL_TYPE.language },
                { name: "XSL", type: SKILL_TYPE.language },
                { name: "XSL:FO", type: SKILL_TYPE.language },
                { name: "jQuery", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "AngularJS", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: ".NET Framework 1.1+", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "ASP.NET MVC", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "ADO.NET", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "LINQ", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "Node.js", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "Express", type: SKILL_TYPE.frameworkSlashLibrary },
                { name: "MS SQL Server", type: SKILL_TYPE.dataRepository },
                { name: "MongoDB", type: SKILL_TYPE.dataRepository },
                { name: "MarkLogic", type: SKILL_TYPE.dataRepository },
                { name: "MySQL", type: SKILL_TYPE.dataRepository }
            ],
            social: {
                github: "https://github.com/superpezgeek",
                linkedIn: "http://www.linkedin.com/pub/dominic-riccardi/1a/793/853",
                twitter: "https://twitter.com/superpezgeek"
            }
        };

        $scope.sendEmail = function(){
            $window.location.href = 'mailto:' + $scope.resume.email;
        };
    }]);