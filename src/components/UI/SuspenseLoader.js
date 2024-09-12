import React from 'react';
import ReactDOM from 'react-dom';
import styles from './SuspenseLoader.module.css';

const Loader = () => {
	return (
		<div className="fixed top-[70px] w-full h-screen z-50 bg-black transition-all flex items-center justify-center">
			<div className="flex flex-col gap-16 relative -top-36">
				<div className="flex flex-row-reverse items-baseline justify-center text-white text-[64px]">
					<div className="flex space-x-2">
						<div
							className={`w-4 h-4 bg-teal-600 rounded-full ${styles.bounce}  ${styles['bounce-delay-1']}`}
						></div>
						<div
							className={`w-4 h-4 bg-rose-600 rounded-full ${styles.bounce}  ${styles['bounce-delay-2']}`}
						></div>
						<div
							className={`w-4 h-4 bg-amber-600 rounded-full ${styles.bounce} ${styles['bounce-delay-3']}`}
						></div>
					</div>
					<p className="text-white animate-pulse delay-150">Loading</p>
				</div>
				<div className="flex items-center justify-center rounded-full relative">
					<div className="flex justify-center items-center bg-amber-500 bg-opacity-100 rounded-full size-[75px] border-red-500 border-4 animate-bounce">
						<div className={styles['cube-loader']}>
							<div className={`${styles.face} ${styles.front}`}></div>
							<div className={`${styles.face} ${styles.back}`}></div>
							<div className={`${styles.face} ${styles.left}`}></div>
							<div className={`${styles.face} ${styles.right}`}></div>
							<div className={`${styles.face} ${styles.top}`}></div>
							<div className={`${styles.face} ${styles.bottom}`}></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const SuspenseLoader = () => {
	return <>{ReactDOM.createPortal(<Loader />, document.getElementById('loader'))}</>;
};

export default SuspenseLoader;
