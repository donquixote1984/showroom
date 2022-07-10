let interval;

export function start(fun, interval=1000) {
	stop();
	interval = setInterval(() => {
		fun();
	}, interval)
}
export function stop() {
	clearInterval(interval);
}