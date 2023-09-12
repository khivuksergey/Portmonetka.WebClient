﻿export default function WalletsAnimation() {
    const wallets: any = document.getElementsByClassName("wallet");
    const doc: any = document.getElementById("wallets");
    if (doc != null) {
        doc.onmousemove = (e: any) => {
            for (const wallet of wallets) {
                const rect = wallet.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                wallet.style.setProperty("--mouse-x", `${x}px`);
                wallet.style.setProperty("--mouse-y", `${y}px`);
            };
        }
    }
}
