const API_URL='http://localhost:8000'
async function httpGetPlanets() {
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/planets`)
  return await response.json()
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const response = await fetch('http://localhost:8000/planets')
  // TODO: Once API is ready.
  const response = await fetch(`${API_URL}/launches`)
  const fetchedlaunches = await response.json()
  return fetchedlaunches.sort((a,b)=>{
    return a.flightNumber-b.flightNumber
  })
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try { return await fetch(`${API_URL}/launches`,{
    method:'POST',
    headers:{
    "Content-Type":"application/json",},
    body:JSON.stringify(launch)
  })
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}catch (error) {
  return {ok:false}
}
} 

async function httpAbortLaunch(id) {
  try {
    fetch(`${API_URL}/launches/${id}`,{
      method:'DELETE',

    })
  } catch (error) {
    return {ok:false}
  }
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};