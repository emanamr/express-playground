async function sendUrl(event) {
  const url = document.getElementById("url").value;
  await fetch("http://localhost:9000/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/JSON",
    },
    body: JSON.stringify({
      data: url,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      document.getElementById("result").innerHTML = `${json.data}`;
      console.log(json.data);
      return json;
    });
}

// export default { sendUrl };
