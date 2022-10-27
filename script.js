const cvdata_path = './cv-data.json';

async function getCVData(url) {
    const res = await fetch(url);
    const cvdata = await res.json();
    loadcv(cvdata);
}

getCVData(cvdata_path);

function info(info) {
    return `
        <h1 id="fullname">${info.fullname}</h1>
        <div>
            <div id="left-info">
                <p class="info-text">
                    ${info.dob}<br>
                    ${info.address.join('<br>')}
                </p>
            </div>
            <div id="right-info">
                <p class="info-text">
                    ${info.tlf}<br>
                    ${info.email}<br>
                    ${info.github}<br>
                </p>
            </div>
        </div>
        <div style="clear: both;"></div>
        <div>
            <p class="description" id="info-description">${info.intro}</p>
        </div>
    `;
}

function workTemplate(work) {
    const start_date = new Date(work.dates.start);
    const from_date = new Date("2019-01-01");
    if (start_date > from_date) {
        return `
        <h6 class="date">${work.dates.start} | ${work.dates.end}</h6>
        <h6 class="main-name">${work.employer}</h6>
        <h6 class="secondary-name">${work.position}</h6>
        <h6 class="location">${work.location}</h6>
        <p class="description">${work.description}</p>
        `;
    }
}

function learnTemplate(learn) {
    return `
    <h6 class="date">${learn.dates.start} | ${learn.dates.end}</h6>
    <h6 class="main-name">${learn.title}</h6>
    <h6 class="secondary-name">${learn.institution}</h6>
    <h6 class="location">${learn.location}</h6>
    <p class="description">${learn.description}</p>
    `;
}

function concise_github_link(url) {
    const indexOfSubStr = url.lastIndexOf("/") + 1;
    return url.substring(indexOfSubStr);
}

function skillTemplate(skill, meta) {
    let level_name;
    if (skill.level === 0) {
        level_name = meta.level_name.low;
    } else if (skill.level === 1) {
        level_name = meta.level_name.medium;
    } else if (skill.level === 2) {
        level_name = meta.level_name.high;
    }
    if (skill.level === 1 | skill.level === 2) {
        return `
        <h5 class="skill-name">${skill.name}</h5>
        <h6 class="main-name">${level_name}</h6>
        ${skill.specificities ?
            `<h6 class="secondary-name">${skill.specificities}</h6>`: "" }
        <p class="description">
            ${skill.description} <br>
            ${skill.links.map(link =>
            `<a href="${link}">:${concise_github_link(link)}<a/>`).join('<br>')}
        </p>
        `;
    }
}

function miscTemplate(misc) {
    return `
    <h5 class="skill-name">${misc.name}</h5>
    <p class="description">${misc.description}</p>
    `;
}

function loadcv(cvdata) {
    document.getElementById("app").innerHTML = `
        <div class="section" id="info">
            ${info(cvdata.info)}
        </div>
        <div class="section" id="works">
            <h2 class="section-title">${cvdata.works.section_title}</h2>
            ${cvdata.works.work.map(workTemplate).join('')}
        </div>
        <div class="section" id="learns">
            <h2 class="section-title">${cvdata.learns.section_title}</h2>
            ${cvdata.learns.learn.map(learnTemplate).join('')}
        </div>
        <div class="section" id="skills">
            <h2 class="section-title">${cvdata.skills.section_title}</h2>
            ${cvdata.skills.skill.map(skill => skillTemplate(skill, cvdata.meta)).join('')}
        </div>
        <div class="section" id="miscs">
            <h2 class="section-title">${cvdata.miscs.section_title}</h2>
            ${cvdata.miscs.misc.map(miscTemplate).join('')}
        </div>
    `;
}
