command: `./GithubActivity/run.sh`,
refreshFrequency: 3600000,
style: "\
#github-activity {\
  position: absolute;\
  left: 50%;\
  bottom: 20px;\
  transform: translateX(-50%);\
}",
render: () => {
	return "<style>#GithubActivity-index-js { width: 100%; height: 100%; }</style>";
},
update: (output, domEl) => {
	domEl.innerHTML += output;
}
