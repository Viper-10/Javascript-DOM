async function loadCivList() {
  const response = await fetch(
    "https://aoe2.net/api/leaderboard?game=aoe2de&leaderboard_id=3&start=1&count=1"
  );
  console.log(response);

  const data = await response.json();

  console.log(data);
}
loadCivList();
