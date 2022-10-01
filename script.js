const datafetch = fetch('data.json')

datafetch.then(response => response.json())

    .then(data => {
        document.title = data.name
        document.querySelector('.wrapper').innerHTML = data.name
        document.querySelector('#tag').innerHTML = data.tag
        document.querySelector('#address').innerHTML = data.address
        const photo = document.getElementById('photo')
        const image = document.createElement('img')
        const gmail = document.getElementById('gmail')
        const linkedin = document.getElementById('linkedin')
        const twitter = document.getElementById('twitter')

        image.src = data.profile_photo
        photo.appendChild(image)

        // console.log(data.gmail[0])
        function contactDetails(info, detail){
            const a = document.createElement('a')
            const link = document.createTextNode(detail[1])
            a.appendChild(link)
            a.href = detail[0]
            a.target ='_blank'
            info.appendChild(a)
        }
        contactDetails(gmail, data.gmail)
        contactDetails(linkedin, data.linkedin)
        contactDetails(twitter, data.twitter)

        skill = data.skills
        achievement = data.achievements
        experience = data.experiences
        education = data.educations
        project = data.projects
        const mySkills = document.getElementById('skill')
        const myAchievement = document.getElementById('achievement')
        const myExperience = document.getElementById('experience')
        const myEducation = document.getElementById('education')
        const myProject = document.getElementById('project')

        // console.log(skill[i])
        for (i = 0; i < skill.length; i++) {
            const li = document.createElement('li')
            const h4 = document.createElement('h4')
            const text = document.createTextNode(skill[i])
            h4.appendChild(text)
            li.appendChild(h4)
            mySkills.appendChild(li)
        }

        for (i = 0; i < achievement.length; i++) {
            const li = document.createElement('li')
            const h4 = document.createElement('h4')
            const text = document.createTextNode(achievement[i])
            h4.appendChild(text)
            li.appendChild(h4)
            myAchievement.appendChild(li)
        }

        document.querySelector('#profile').innerHTML = data.profile

        for (i = 0; i < experience.length; i++) {
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const h4 = document.createElement('h4')
            const p = document.createElement('p')
            const b = document.createElement('b')
            const text = document.createTextNode(experience[i][0])
            const text2 = document.createTextNode(experience[i][1])
            const text3 = document.createTextNode(experience[i][2])
            h4.setAttribute('class','border')
            h3.appendChild(text)
            h4.appendChild(text2)
            b.appendChild(text3)
            p.appendChild(b)
            div.appendChild(h3)
            div.appendChild(h4)
            div.appendChild(p)
            div.setAttribute('class', 'self')
            myExperience.appendChild(div)
        }

        for (i = 0; i < education.length; i++) {
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const h4 = document.createElement('h4')
            const it = document.createElement('i')
            const b = document.createElement('b')
            const text = document.createTextNode(education[i][0])
            const text2 = document.createTextNode(education[i][1])
            const text3 = document.createTextNode(education[i][2])

            h3.appendChild(text)
            h4.appendChild(text2)
            b.appendChild(text3)
            it.appendChild(b)
            div.appendChild(h3)
            div.appendChild(h4)
            div.appendChild(it)
            div.setAttribute('class', 'self')
            myEducation.appendChild(div)
        }

        for (i = 0; i < project.length; i++) {
            const div = document.createElement('div')
            const h3 = document.createElement('h3')
            const h4 = document.createElement('h4')
            const a = document.createElement('a')
            const text = document.createTextNode(project[i][0])
            const text2 = document.createTextNode(project[i][1])
            const link = document.createTextNode(' GitHub link')

            a.href = project[i][2]
            a.target = '_blank'
            a.appendChild(link)
            h3.appendChild(text)
            h4.appendChild(text2)
            h4.appendChild(a)
            div.appendChild(h3)
            div.appendChild(h4)
            div.setAttribute('class', 'self')
            myProject.appendChild(div)
        }

    })