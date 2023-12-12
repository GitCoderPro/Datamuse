const input = document.getElementById("input")
const url = "https://api.datamuse.com/words?rel_syn="
const list = document.getElementById("list")
const btn = document.getElementById("search-btn")
const del = document.getElementById("delete")
const info = document.getElementById("info")

async function getSynonyms() {
  try {
    const endpoint = url + input.value
    const response = await fetch(endpoint)
    if (response.status === 200) {
      const JSONSynonyms = await response.json()
      info.innerHTML = `Synonyms to ${input.value}:`
      JSONSynonyms.forEach(item => {
        const li = document.createElement("li")

        li.textContent = item.word

        list.append(li)
      })
    }
  } catch(error) {
    alert("An error occurred!")
  }
}

function whenRemove() {
  list.innerHTML = ''
}

btn.addEventListener("click", getSynonyms)
del.addEventListener("click", whenRemove)