const pdfMake = require("pdfmake/build/pdfmake.min.js");
if (pdfMake.vfs == undefined) {
  const pdfFonts = require("pdfmake/build/vfs_fonts.js");
  pdfMake.vfs = pdfFonts.pdfMake.vfs;
}

const WIDTH = 595.28;
const MARGIN_LEFT = 15;
const COLUMN_GAP = 42;

function calcWidthIgnoringGap(width){
    let percentSign = width.toString().indexOf("%");
    let value = parseFloat(width);
    if(percentSign > -1){
        const percentageValue = parseFloat(
          width.substring(0, percentSign)
        );
        const dec = percentageValue / 100;
        value = WIDTH * dec;
    }
    return value - (MARGIN_LEFT * 2 + COLUMN_GAP);
}

function getRectWidth(opts){
    /**
     * {
     *  percentage: number (decimal)
     * }
     */
    if(!opts){
        return WIDTH - MARGIN_LEFT;
    }
    else if(opts.width){
        return opts.width - MARGIN_LEFT;
    }
    else if(opts.percentage){
        return calcWidthIgnoringGap(opts.percentage);
    }
}

function getDivider(width, color){
    let isPercent = width.toString().indexOf('%') > -1;
    let opts = { width };
    if(isPercent){
        opts = {
            percentage: width
        };
    }

    const svg = `<svg width="${getRectWidth(opts)}" height="3"><rect width="${getRectWidth(opts)}" height="3" style="fill:${color}" /> Sorry, your browser does not support inline SVG. </svg>`;
    return svg;
}

function getWorkExperience(data, divColor){
    const arr = [];
    data.forEach((w, index, selfArr) => {
        const title = {
          text: w.title,
          margin: [8, 12, 8, 0],
          fontSize: 14
        };
        const company = {
          text: w.companyName,
          margin: [8, 8, 8, 0],
          fontSize: 11,
          bold: true
        };
        const dates = {
          columns: [
            {
              text: `${w.startMonth} ${w.startYear} - ${
                w.isCurrent ? "Ongoing" : `${w.endMonth} ${w.endYear}`
              }`,
              fontSize: 10
            },
            {
              text: `${w.city}, ${w.region}`,
              fontSize: 10
            }
          ],
          columnGap: 15,
          margin: [8, 0, 8, 0]
        };
        const description = {
            margin: [8, 8, 8, 0],
            text: w.description
        };
        arr.push(title);
        arr.push(company);
        arr.push(dates);
        arr.push(description);
        if(index !== selfArr.length-1){
            const marginLeft =
              (getRectWidth({ percentage: "50%" }) -
              getRectWidth({ percentage: "33%" })) / 2;
            const svg = {
              svg: getDivider("33%", divColor),
              margin: [marginLeft, 12, 0, 0]
            };
            arr.push(svg);
        }
    });

    return arr;
}

function getAchievements(data){
    const arr = [];
    data.forEach((a) => {
        const title = {
          text: a.title,
          margin: [0, 8, 0, 0],
          fontSize: 11,
          bold: true
        };
        const description = {
            text: a.description,
            margin: [0, 8, 0, 0],
            fontSize: 11
        };
        arr.push(title);
        arr.push(description);
    });
    return arr;
}

function getSkills(data){
    const obj = {
        ul: data.map(s => {
            return {
                text: s,
                // listType: 'none',
                fontSize: 11
            };
        }),
        margin: [0, 8, 0, 0]
    };
    return obj;
}

function getEducation(data){
    const arr = [];
    data.forEach(education => {
        const major = {
          text: education.fieldOfStudy,
          margin: [0, 12, 0, 0],
          fontSize: 14
        };
        const school = {
          text: education.institutionName,
          margin: [0, 8, 0, 0],
          fontSize: 11,
          bold: true
        };
        const dates = {
          columns: [
            {
              text: `${education.startMonth} ${education.startYear} - ${
                education.isCurrent
                  ? "Ongoing"
                  : `${education.endMonth} ${education.endYear}`
              }`,
              fontSize: 10
            },
            {
              text: `${education.city}, ${education.region}`,
              fontSize: 10
            }
          ],
          columnGap: 15
        };
        arr.push(major);
        arr.push(school);
        arr.push(dates);
    });
    return arr;
}

function getOrganizations(data) {
  const arr = [];
  data.forEach(org => {
    const orgName = {
      text: org.name,
      margin: [0, 12, 0, 0],
      fontSize: 14,
      bold: true
    };
    const orgPosition = {
      text: org.position,
      margin: [0, 8, 0, 0],
      fontSize: 11,
      italics: true
    };
    arr.push(orgName);
    arr.push(orgPosition);
  });
  return arr;
}

function generatePDF(resume){
    // TODO switch statement to generate certain pdf based on template
    const docDefinition = {
      content: [
        {
          // Name
          text:
            resume.personalInfo.firstName.toUpperCase() +
            " " +
            resume.personalInfo.lastName.toUpperCase(),
          style: ["header1"],
          margin: [15, 15, 0, 0]
        },
        {
          // email, link, region row
          margin: [15, 15, 0, 0],
          columnGap: COLUMN_GAP,
          columns: [
            {
              // Email
              text: resume.personalInfo.email,
              width: "auto"
            },
            {
              // personal link
              text: resume.personalInfo.link,
              link: resume.personalInfo.link,
              width: "auto"
            },
            {
              // city, region
              text:
                resume.personalInfo.city +
                ", " +
                resume.personalInfo.region,
              width: "auto"
            }
          ]
        },
        {
          text: "OBJECTIVE",
          fontSize: 18,
          bold: true,
          margin: [15, 25, 0, 0],
        },
        {
          margin: [15, 15, 0, 0],
          columnGap: COLUMN_GAP,
          text: resume.objective,
          width: "auto"
        },
        {
          // main container for pdf
          margin: [15, 25, 0, 0],
          columns: [
            [
              {
                text: "EXPERIENCE",
                fontSize: 18,
                bold: true
              },
              {
                svg: getDivider("50%", resume.settings.color.hex),
                margin: [0, 5, 0, 0]
              },
              getWorkExperience(resume.workExperienceData, resume.settings.color.hex)
            ],
            [
              [
                // other columns
                {
                  text: "ORGANIZATIONS",
                  fontSize: 18,
                  bold: true
                },
                {
                  svg: getDivider("50%", resume.settings.color.hex),
                  margin: [0, 5, 0, 0]
                },
                getOrganizations(resume.organizations),
                {
                  text: "ACHIEVEMENTS",
                  fontSize: 18,
                  bold: true,
                  margin: [0, 25, 0, 0]
                },
                {
                  svg: getDivider("50%", resume.settings.color.hex),
                  margin: [0, 5, 0, 0]
                },
                getAchievements(resume.achievements),
                {
                  text: "SKILLS",
                  fontSize: 18,
                  bold: true,
                  margin: [0, 25, 0, 0]
                },
                {
                  svg: getDivider("50%", resume.settings.color.hex),
                  margin: [0, 5, 0, 0]
                },
                getSkills(resume.skills),
                {
                  text: "EDUCATION",
                  fontSize: 18,
                  bold: true,
                  margin: [0, 25, 0, 0]
                },
                {
                  svg: getDivider("50%", resume.settings.color.hex),
                  margin: [0, 5, 0, 0]
                },
                getEducation(resume.educationData)
              ]
            ]
          ]
        }
      ],
      styles: {
        header1: {
          fontSize: 30,
          bold: true
        }
      }
    };
    pdfMake.createPdf(docDefinition).download("optionalName.pdf");
}

export default {
    generatePDF
}