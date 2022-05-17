
const form = document.querySelector('form');

const createIssue = async (e) =>{
    e.preventDefault();

    const doc = {
        department : form.department.value,
        description : form.description.value,
        related : form.related.value,
        issue : form.issue.value,
        likes: 0,
        image : "images/defaultIssue.jpg"
    }

    await fetch("http://localhost:3000/Issues",{
        method : "POST",
        body : JSON.stringify(doc)
    });

    window.location.replace('/index.html');
}

form.addEventListener('submit', createIssue);