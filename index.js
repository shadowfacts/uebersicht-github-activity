command: `./github-activity.widget/run.sh`,
refreshFrequency: 3600000,
style: "\
#github-activity {\
  position: absolute;\
  left: 50%;\
  top: 50%;\
  transform: translateX(-50%) translateY(-50%);\
}",
render: () => {
	return "<style>#github-activity-widget-index-js { width: 100%; height: 100%; }</style>";
},
update: (output, domEl) => {
	domEl.innerHTML += output;
}
