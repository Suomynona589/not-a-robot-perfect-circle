        function drawCircle() {
            const svg = document.querySelector("main svg");
            const drawDiv = document.querySelector("main div");
            if (!svg || !drawDiv) return;

            const s = svg.getBoundingClientRect();
            const cx = s.width / 2 + s.x;
            const cy = s.height / 2 + s.y;
            const r = s.width / 3;
            let a = 0;

            for (let e = 0; e < 50; e++) {
                a += Math.acos(1 - Math.pow(60 / r, 2) / 2);
                const t = Math.round(cx + r * Math.cos(a));
                const n = Math.round(cy + r * Math.sin(a));
                if (e === 0) {
                    drawDiv.dispatchEvent(new MouseEvent("mousedown", { clientX: t, clientY: n }));
                }
                drawDiv.dispatchEvent(new MouseEvent("mousemove", { clientX: t, clientY: n }));
            }

            drawDiv.dispatchEvent(new MouseEvent("mouseup"));
        }

        const btn = document.createElement("button");
        btn.textContent = "Press this or click Ctrl+Z";
        btn.style.position = "fixed";
        btn.style.top = "20px";
        btn.style.right = "20px";
        btn.style.zIndex = "9999";
        btn.style.padding = "12px 20px";
        btn.style.fontSize = "16px";
        btn.style.background = "#4CAF50";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "8px";
        btn.style.cursor = "pointer";
        btn.style.boxShadow = "0 4px 6px rgba(0,0,0,0.2)";
        btn.title = "Shortcut: Ctrl+Z";
        btn.addEventListener("click", drawCircle);
        document.body.appendChild(btn);

        document.addEventListener("keydown", function(e) {
            if (e.ctrlKey && e.key.toLowerCase() === "z") {
                drawCircle();
