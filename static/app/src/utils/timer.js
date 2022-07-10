let interval = null;

export function start(fun, inter=1000) {
	stop();
	interval = setInterval(() => {
		fun();
	}, inter)
}
export function stop() {
	if (interval != null) {
		clearInterval(interval);
		interval = null;
	}
}