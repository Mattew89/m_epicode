function searchJob(title,location){
  title = title.toLowerCase()
  location = location.toLowerCase()


jobs.forEach(job =>{
  const jobTitle = job.title.toLowerCase();
  const jobLocation = job.location.toLowerCase();
  if (jobTitle.includes(title) && jobLocation.includes(location)){
    result.push(job)
  }

});

return {
  count:result.length,
  result
}
}

function search(){
  const title = document.querySelector("#search-job").value;
  const location = document.querySelector("#search-location").value;

}

const searchResult = searchJob(title,location);
console.log(searchResult);

return searchResult;