// create badges with link, badges appears under description if selected
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache license 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'BSD 2-Clause "Simplified" License':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Clause "New" or Revised" License':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case 'GNU Alfredo General Public License v3.0':
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU General Public License v2.0':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'Mozilla Public License 2.0':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    default:
      return ``;
  }
}

// license link for license section, creates link to license type selected by user
function renderLicenseLink(license) {
  switch (license) {
    case 'Apache license 2.0':
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License v3.0':
      return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'MIT License':
      return `[${license}](https://opensource.org/licenses/MIT)`;
    case 'BSD 2-Clause "Simplified" License':
      return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Clause "New" or Revised" License':
      return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost Software License 1.0':
      return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero v1.0 Universal':
      return `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public License':
      return `[${license}](https://opensource.org/licenses/EPL-1.0)`;
    case 'GNU Alfredo General Public License v3.0':
      return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`;
    case 'GNU General Public License v2.0':
      return `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'Mozilla Public License 2.0':
      return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
    case 'The Unlicense':
      return `[${license}](http://unlicense.org/)`;
    default:
      return ``;
  }
}

// create license section link in table of contents, only created if license type is provided by user
function renderLicenseTOC(license) {
  if (!license) {
    return '';
  } else {
    return `
 * [License](#license)
`
  }
}

// create license section, only adds license title/section if license type is provided by user
function renderLicenseSection(license) {
  if (!license) {
    return '';
  } else {
    return `
 ## License
${renderLicenseLink(license)}
`
  }
}

// generate README.md, template literal for markdown file
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  Contact me with any additional questions:
  
  [https://github.com/${data.username}](https://github.com/${data.username})

  ${data.email}
`;
}

module.exports = generateMarkdown;