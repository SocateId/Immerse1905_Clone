// Elements from doc
var artShowcase = document.getElementById("portfolioProjects_artShowcase");

// Base Values, Video Sources
// Goes in order: Chasing nutcracker; Dead da; Murasaki en no densetsu; Escape; Crepusculum; Ivan; Legend of Kham; Hidden Instinct
const projectFolderNames = ["Nutcracker", "DeadDa", "Murasaki", "Escape", "Crepusculum", "Ivan", "Kham", "HiddenInstinct"];
const projectFolder_fileNum = [53, 56, 62, 38, 66, 67, 82, 53];
const porjectFolder_fileLinks = {		// The Online file links in Imgur
	// Nutcracker
	Nutcracker: [
		"https://i.imgur.com/Y6ujJWe.jpg", "https://i.imgur.com/DMYFm7x.jpg", "https://i.imgur.com/QsLKM0I.jpg", "https://i.imgur.com/gZnNxUu.jpg", "https://i.imgur.com/IUm9Wd1.jpg",
		"https://i.imgur.com/Pe8S70N.jpg", "https://i.imgur.com/5xpkOAC.jpg", "https://i.imgur.com/vq19ZHY.jpg", "https://i.imgur.com/ckjd9Yv.jpg", "https://i.imgur.com/KEHtEHu.jpg",
		"https://i.imgur.com/3tU4W0g.jpg", "https://i.imgur.com/3Cok5bJ.jpg", "https://i.imgur.com/GXzrcqo.jpg", "https://i.imgur.com/Yb4R6bY.jpg", "https://i.imgur.com/cq0aVsi.jpg",
		"https://i.imgur.com/SMbk9kq.jpg", "https://i.imgur.com/C7h4GiB.jpg", "https://i.imgur.com/Yf3GCkB.jpg", "https://i.imgur.com/FGsGbdb.jpg", "https://i.imgur.com/ei9s9JN.jpg",
		"https://i.imgur.com/p1iq0Df.jpg", "https://i.imgur.com/LQPCQCK.jpg", "https://i.imgur.com/VwmCBn4.jpg", "https://i.imgur.com/7lRFZs8.jpg", "https://i.imgur.com/PeCBpwc.jpg",
		"https://i.imgur.com/aFYsKxs.jpg", "https://i.imgur.com/xvMUzpP.jpg", "https://i.imgur.com/2yNvJxa.jpg", "https://i.imgur.com/TdhOe0G.jpg", "https://i.imgur.com/LiVUyM3.jpg",
		"https://i.imgur.com/b3jpjEN.jpg", "https://i.imgur.com/f31qJTq.jpg", "https://i.imgur.com/O9VgKTI.jpg", "https://i.imgur.com/6t0BWX2.jpg", "https://i.imgur.com/K9iI8kS.jpg",
		"https://i.imgur.com/ueXKbNw.jpg", "https://i.imgur.com/igAWp6O.jpg", "https://i.imgur.com/48Gza8q.jpg", "https://i.imgur.com/Pzdn5UF.jpg", "https://i.imgur.com/qZOUhQB.jpg",
		"https://i.imgur.com/11TNTF8.jpg", "https://i.imgur.com/2X6Kkct.jpg", "https://i.imgur.com/wUcMjkU.jpg", "https://i.imgur.com/NBNL5Wn.jpg", "https://i.imgur.com/fQ6AG4J.jpg",
		"https://i.imgur.com/3Xh52cw.jpg", "https://i.imgur.com/cGFmyt6.jpg", "https://i.imgur.com/QyYRaDk.jpg", "https://i.imgur.com/79upHjg.jpg", "https://i.imgur.com/GhxesPh.jpg",
		"https://i.imgur.com/H517TSk.jpg", "https://i.imgur.com/ShyMwib.jpg", "https://i.imgur.com/8o2mTTL.jpg"
	],
	DeadDa: [
		"https://i.imgur.com/hbMFbDE.jpg", "https://i.imgur.com/3peRulb.jpg", "https://i.imgur.com/fsCVsme.jpg", "https://i.imgur.com/CPN1iUG.jpg", "https://i.imgur.com/UUqgURD.jpg",
		"https://i.imgur.com/9ubPKsL.jpg", "https://i.imgur.com/qs6ttwM.jpg", "https://i.imgur.com/4clARsA.jpg", "https://i.imgur.com/dE7yPuF.jpg", "https://i.imgur.com/wYnl83g.jpg",
		"https://i.imgur.com/IU5xrZ6.jpg", "https://i.imgur.com/GkXfaCP.jpg", "https://i.imgur.com/2u78s7d.jpg", "https://i.imgur.com/Ua7bVIK.jpg", "https://i.imgur.com/g9tKb05.jpg",
		"https://i.imgur.com/ff0GwOx.jpg", "https://i.imgur.com/vPl8HzB.jpg", "https://i.imgur.com/z15PoeO.jpg", "https://i.imgur.com/LLw3G6v.jpg", "https://i.imgur.com/GmZqbGu.jpg",
		"https://i.imgur.com/2byPr95.jpg", "https://i.imgur.com/xzRI9Ia.jpg", "https://i.imgur.com/VjqjgVZ.jpg", "https://i.imgur.com/KcTqtTR.jpg", "https://i.imgur.com/ny3QLtX.jpg",
		"https://i.imgur.com/avVGNs7.jpg", "https://i.imgur.com/lrBPdhB.jpg", "https://i.imgur.com/fmIdo8B.jpg", "https://i.imgur.com/sRczkpz.jpg", "https://i.imgur.com/9yUDT7G.jpg",
		"https://i.imgur.com/LRzfgjF.jpg", "https://i.imgur.com/hTgAdj2.jpg", "https://i.imgur.com/ZLJSHyI.jpg", "https://i.imgur.com/jWtRL0b.jpg", "https://i.imgur.com/VZAvvIj.jpg",
		"https://i.imgur.com/TWma3mF.jpg", "https://i.imgur.com/L8D8n2p.jpg", "https://i.imgur.com/zYFmiwN.jpg", "https://i.imgur.com/3gclFtf.jpg", "https://i.imgur.com/epATW5M.jpg",
		"https://i.imgur.com/AaFWbEM.jpg", "https://i.imgur.com/car47yy.jpg", "https://i.imgur.com/YFm0FdH.jpg", "https://i.imgur.com/zYIEsIp.jpg", "https://i.imgur.com/13D6u5Y.jpg",
		"https://i.imgur.com/ZH5nPz8.jpg", "https://i.imgur.com/B7Mu4AF.jpg", "https://i.imgur.com/rD51ohB.jpg", "https://i.imgur.com/uoscTmq.jpg", "https://i.imgur.com/57wIJ6x.jpg",
		"https://i.imgur.com/cCYhRfo.jpg", "https://i.imgur.com/9BtJuaV.jpg", "https://i.imgur.com/UmXkU6t.jpg", "https://i.imgur.com/eNeZX8a.jpg", "https://i.imgur.com/NgkHT24.jpg",
		"https://i.imgur.com/tfmFvcs.jpg"
	],
	Murasaki: [
		"https://i.imgur.com/dqluq0a.jpg", "https://i.imgur.com/srXItje.jpg", "https://i.imgur.com/wKoSmDE.jpg", "https://i.imgur.com/erl8SJl.jpg", "https://i.imgur.com/iSBSjqD.jpg",
		"https://i.imgur.com/2jDIXhJ.jpg", "https://i.imgur.com/82PgFj9.jpg", "https://i.imgur.com/irlLKKW.jpg", "https://i.imgur.com/kCySpp7.jpg", "https://i.imgur.com/qTK6M9l.jpg",
		"https://i.imgur.com/9IMXdfz.jpg", "https://i.imgur.com/YpszcOP.jpg", "https://i.imgur.com/6Z15TKQ.jpg", "https://i.imgur.com/74MNX6b.jpg", "https://i.imgur.com/9S3u8Sd.jpg",
		"https://i.imgur.com/V16QKdU.jpg", "https://i.imgur.com/nhsUYr9.jpg", "https://i.imgur.com/4udXfhr.jpg", "https://i.imgur.com/FjxQtRr.jpg", "https://i.imgur.com/WzCy1ry.jpg",
		"https://i.imgur.com/B7STnMb.jpg", "https://i.imgur.com/e88Z5g6.jpg", "https://i.imgur.com/i5WflzV.jpg", "https://i.imgur.com/NdJhzYu.jpg", "https://i.imgur.com/eLQBsd1.jpg",
		"https://i.imgur.com/PYidUvp.jpg", "https://i.imgur.com/oMHqKBx.jpg", "https://i.imgur.com/zee8sS7.jpg", "https://i.imgur.com/TLsArf3.jpg", "https://i.imgur.com/PwLcasE.jpg",
		"https://i.imgur.com/9dwZGth.jpg", "https://i.imgur.com/UtCSODB.jpg", "https://i.imgur.com/b2QEWRv.jpg", "https://i.imgur.com/63VyJWu.jpg", "https://i.imgur.com/9doDyS9.jpg",
		"https://i.imgur.com/t8BSdWa.jpg", "https://i.imgur.com/LsjcWwK.jpg", "https://i.imgur.com/YiR7OQT.jpg", "https://i.imgur.com/PRQn6Ls.jpg", "https://i.imgur.com/TRewkDR.jpg",
		"https://i.imgur.com/tRpIrvE.jpg", "https://i.imgur.com/gvT8j59.jpg", "https://i.imgur.com/rsUChOy.jpg", "https://i.imgur.com/ych9txe.jpg", "https://i.imgur.com/BoK160M.jpg",
		"https://i.imgur.com/Er4RDw8.jpg", "https://i.imgur.com/Lj2GjIk.jpg", "https://i.imgur.com/FpTxsrn.jpg", "https://i.imgur.com/IiF1r20.jpg", "https://i.imgur.com/Pd5qToD.jpg",
		"https://i.imgur.com/i0o7min.jpg", "https://i.imgur.com/yyW2MWx.jpg", "https://i.imgur.com/cetgtfI.jpg", "https://i.imgur.com/R3N03yI.jpg", "https://i.imgur.com/N4R7I7Q.jpg",
		"https://i.imgur.com/T7XmDxh.jpg", "https://i.imgur.com/BkohepR.jpg", "https://i.imgur.com/srIBoKB.jpg", "https://i.imgur.com/VWu6efo.jpg", "https://i.imgur.com/RvVwpMU.jpg",
		"https://i.imgur.com/YBxtlki.jpg", "https://i.imgur.com/9F1g2QN.jpg"
	],
	Escape: [
		"https://i.imgur.com/q7J23BK.jpg", "https://i.imgur.com/UwPAVaN.jpg", "https://i.imgur.com/nFJsyZr.jpg", "https://i.imgur.com/guycwAf.jpg", "https://i.imgur.com/MkHpg1T.jpg",
		"https://i.imgur.com/mVSNoqZ.jpg", "https://i.imgur.com/5LU5V1p.jpg", "https://i.imgur.com/2woSpPL.jpg", "https://i.imgur.com/osBU3s3.jpg", "https://i.imgur.com/1FO6rua.jpg",
		"https://i.imgur.com/4n4j93a.jpg", "https://i.imgur.com/llRggDs.jpg", "https://i.imgur.com/1T6r1IG.jpg", "https://i.imgur.com/3Y38f3q.jpg", "https://i.imgur.com/yeMaLXa.jpg",
		"https://i.imgur.com/AKjF9Ju.jpg", "https://i.imgur.com/n75E99F.jpg", "https://i.imgur.com/c7W0MZi.jpg", "https://i.imgur.com/0uLMLGy.jpg", "https://i.imgur.com/1myfAvN.jpg",
		"https://i.imgur.com/PtouH7U.jpg", "https://i.imgur.com/sa7RVWZ.jpg", "https://i.imgur.com/ilTmGdN.jpg", "https://i.imgur.com/G6VK204.jpg", "https://i.imgur.com/KQ1DvnN.jpg",
		"https://i.imgur.com/9AGOGNf.jpg", "https://i.imgur.com/gdVsZmG.jpg", "https://i.imgur.com/Z2H4eL4.jpg", "https://i.imgur.com/7OeFECW.jpg", "https://i.imgur.com/h47QVQP.jpg",
		"https://i.imgur.com/SJp7V6g.jpg", "https://i.imgur.com/hwGCTLe.jpg", "https://i.imgur.com/plHPjW1.jpg", "https://i.imgur.com/SyG3nqM.jpg", "https://i.imgur.com/FDsu45y.jpg",
		"https://i.imgur.com/D6bNMVR.jpg", "https://i.imgur.com/JnW2OwX.jpg", "https://i.imgur.com/KSQvpfR.jpg"
	],
	Crepusculum: [
		"https://i.imgur.com/ROStQhX.jpg", "https://i.imgur.com/XmYfvFJ.jpg", "https://i.imgur.com/RFxEizU.jpg", "https://i.imgur.com/FweYOUo.jpg", "https://i.imgur.com/PWiNT6c.jpg",
		"https://i.imgur.com/gC7ekqK.jpg", "https://i.imgur.com/FAzwJ7p.jpg", "https://i.imgur.com/VsDTu8Y.jpg", "https://i.imgur.com/thGw533.jpg", "https://i.imgur.com/KtLe9Ch.jpg",
		"https://i.imgur.com/9NSaP7O.jpg", "https://i.imgur.com/mAw5yza.jpg", "https://i.imgur.com/kKjKPVc.jpg", "https://i.imgur.com/R0OEhGX.jpg", "https://i.imgur.com/L1Oq4Vl.jpg",
		"https://i.imgur.com/CelCN7c.jpg", "https://i.imgur.com/czNyg62.jpg", "https://i.imgur.com/XOD8zX6.jpg", "https://i.imgur.com/vUSdovp.jpg", "https://i.imgur.com/2Eg99Jx.jpg",
		"https://i.imgur.com/fsATkBd.jpg", "https://i.imgur.com/RElGJJx.jpg", "https://i.imgur.com/SaIF4Dk.jpg", "https://i.imgur.com/fwbTr61.jpg", "https://i.imgur.com/6tUvVHX.jpg",
		"https://i.imgur.com/YodiJtW.jpg", "https://i.imgur.com/ZqXJAIm.jpg", "https://i.imgur.com/f6sgiAb.jpg", "https://i.imgur.com/mCfvrv6.jpg", "https://i.imgur.com/WIKgt8f.jpg",
		"https://i.imgur.com/K6ZfKFP.jpg", "https://i.imgur.com/2SXZnqe.jpg", "https://i.imgur.com/K0OpyIC.jpg", "https://i.imgur.com/UEnhKw0.jpg", "https://i.imgur.com/8vTvPQJ.jpg",
		"https://i.imgur.com/JiJp7Np.jpg", "https://i.imgur.com/iJIIn60.jpg", "https://i.imgur.com/zpJ2D2b.jpg", "https://i.imgur.com/zwoaC8J.jpg", "https://i.imgur.com/obZaO3I.jpg",
		"https://i.imgur.com/ggRK4zc.jpg", "https://i.imgur.com/WDjWU2N.jpg", "https://i.imgur.com/zRIgB6M.jpg", "https://i.imgur.com/YWWg0zO.jpg", "https://i.imgur.com/VjeN2SF.jpg",
		"https://i.imgur.com/dHnHXLR.jpg", "https://i.imgur.com/LtgTbZT.jpg", "https://i.imgur.com/0CuHzaY.jpg", "https://i.imgur.com/zuM2nTW.jpg", "https://i.imgur.com/U9tTeDz.jpg",
		"https://i.imgur.com/ZHH0EUm.jpg", "https://i.imgur.com/Inq60Ti.jpg", "https://i.imgur.com/dUSfP9q.jpg", "https://i.imgur.com/Mk42emX.jpg", "https://i.imgur.com/hK3WtxV.jpg",
		"https://i.imgur.com/ykuNd32.jpg", "https://i.imgur.com/4REeL1r.jpg", "https://i.imgur.com/6IWC6cx.jpg", "https://i.imgur.com/kJxBhSk.jpg", "https://i.imgur.com/qvHCjRW.jpg",
		"https://i.imgur.com/gMXkSbF.jpg", "https://i.imgur.com/pa7foN0.jpg", "https://i.imgur.com/vILk0We.jpg", "https://i.imgur.com/ykaXGno.jpg", "https://i.imgur.com/LdCkloe.jpg",
		"https://i.imgur.com/7wfuWPZ.jpg"
	],
	Ivan: [
		"https://i.imgur.com/7RU2c9B.jpg", "https://i.imgur.com/dmig4F2.jpg", "https://i.imgur.com/pq1GIeO.jpg", "https://i.imgur.com/AdXjioP.jpg", "https://i.imgur.com/DZhWxU5.jpg",
		"https://i.imgur.com/eyUhP1m.jpg", "https://i.imgur.com/Kco4wYn.jpg", "https://i.imgur.com/CsCihTO.jpg", "https://i.imgur.com/BXOjj8S.jpg", "https://i.imgur.com/RAcuY2C.jpg",
		"https://i.imgur.com/qY1EI5m.jpg", "https://i.imgur.com/FvkXVTv.jpg", "https://i.imgur.com/wfxn77n.jpg", "https://i.imgur.com/SZshCvS.jpg", "https://i.imgur.com/kAsZWJp.jpg",
		"https://i.imgur.com/PwqlghG.jpg", "https://i.imgur.com/5e4N8Gw.jpg", "https://i.imgur.com/9JqM2oB.jpg", "https://i.imgur.com/rslh6KM.jpg", "https://i.imgur.com/ZMt49CF.jpg",
		"https://i.imgur.com/gtfmmPb.jpg", "https://i.imgur.com/sJTFf9V.jpg", "https://i.imgur.com/WCwxLf6.jpg", "https://i.imgur.com/Ny1q7lA.jpg", "https://i.imgur.com/p83orwY.jpg",
		"https://i.imgur.com/VWyl4px.jpg", "https://i.imgur.com/BGhwIHn.jpg", "https://i.imgur.com/5EBWnii.jpg", "https://i.imgur.com/kTg8tXJ.jpg", "https://i.imgur.com/JUoe5Oc.jpg",
		"https://i.imgur.com/aO2nIFC.jpg", "https://i.imgur.com/VtCPIJd.jpg", "https://i.imgur.com/erIYbi0.jpg", "https://i.imgur.com/gPb3ceW.jpg", "https://i.imgur.com/W8J50GV.jpg",
		"https://i.imgur.com/yMaV2tf.jpg", "https://i.imgur.com/ZneKmW9.jpg", "https://i.imgur.com/RBF14b4.jpg", "https://i.imgur.com/2isAs93.jpg", "https://i.imgur.com/VkIf114.jpg",
		"https://i.imgur.com/7gQa7l6.jpg", "https://i.imgur.com/GgszmwR.jpg", "https://i.imgur.com/cu6KyQm.jpg", "https://i.imgur.com/c0hekQK.jpg", "https://i.imgur.com/rZlImWk.jpg",
		"https://i.imgur.com/wSteF1w.jpg", "https://i.imgur.com/7GOxq9n.jpg", "https://i.imgur.com/PhP89rZ.jpg", "https://i.imgur.com/48ZeWc7.jpg", "https://i.imgur.com/DJ2p7Kz.jpg",
		"https://i.imgur.com/Kchpi6T.jpg", "https://i.imgur.com/nIsPuPo.jpg", "https://i.imgur.com/2LlsZNe.jpg", "https://i.imgur.com/jSseNFQ.jpg", "https://i.imgur.com/ihIcN49.jpg",
		"https://i.imgur.com/5iVN2bu.jpg", "https://i.imgur.com/nN1JGuo.jpg", "https://i.imgur.com/SYRKHRE.jpg", "https://i.imgur.com/36S1aGw.jpg", "https://i.imgur.com/WjLxKuo.jpg",
		"https://i.imgur.com/ngmDdRn.jpg", "https://i.imgur.com/drjbdKh.jpg", "https://i.imgur.com/ZWoCPXO.jpg", "https://i.imgur.com/rQVSsZA.jpg", "https://i.imgur.com/mAqyLu5.jpg",
		"https://i.imgur.com/mct0phf.jpg", "https://i.imgur.com/ANKcShH.jpg"
	],
	Kham: [
		"https://i.imgur.com/uX1TrNk.jpg", "https://i.imgur.com/UBq0YUn.jpg", "https://i.imgur.com/sOgwaIJ.jpg", "https://i.imgur.com/FDiECI9.jpg", "https://i.imgur.com/ZlqVHgT.jpg",
		"https://i.imgur.com/2RTZ5qn.jpg", "https://i.imgur.com/tsDSckr.jpg", "https://i.imgur.com/nGHaKYJ.jpg", "https://i.imgur.com/JewBi4l.jpg", "https://i.imgur.com/XHALOeP.jpg",
		"https://i.imgur.com/ICwWVUg.jpg", "https://i.imgur.com/tuJ8b2Z.jpg", "https://i.imgur.com/SwF1hfD.jpg", "https://i.imgur.com/BTbbADq.jpg", "https://i.imgur.com/oCq8x2B.jpg",
		"https://i.imgur.com/H73tAPS.jpg", "https://i.imgur.com/Rl0OurG.jpg", "https://i.imgur.com/AQOELjY.jpg", "https://i.imgur.com/rOGb4Vm.jpg", "https://i.imgur.com/NAO8mOs.jpg",
		"https://i.imgur.com/M02rG7R.jpg", "https://i.imgur.com/JQ2QZEH.jpg", "https://i.imgur.com/EYH2up2.jpg", "https://i.imgur.com/xAz5rYM.jpg", "https://i.imgur.com/sUAjYfy.jpg",
		"https://i.imgur.com/CGCAjH0.jpg", "https://i.imgur.com/ehNfS0W.jpg", "https://i.imgur.com/FmV7uXD.jpg", "https://i.imgur.com/31laNpk.jpg", "https://i.imgur.com/3ZVz9vg.jpg",
		"https://i.imgur.com/qZdiaUR.jpg", "https://i.imgur.com/5GzwiqU.jpg", "https://i.imgur.com/EhtyhEj.jpg", "https://i.imgur.com/iZd8fZJ.jpg", "https://i.imgur.com/XRM2cJG.jpg",
		"https://i.imgur.com/FpioA4M.jpg", "https://i.imgur.com/o4jAAE5.jpg", "https://i.imgur.com/KSR36el.jpg", "https://i.imgur.com/M4hX1TU.jpg", "https://i.imgur.com/AOHHJPJ.jpg",
		"https://i.imgur.com/Rn968OQ.jpg", "https://i.imgur.com/NKUHSSd.jpg", "https://i.imgur.com/VBDCrGi.jpg", "https://i.imgur.com/CHOYyOp.jpg", "https://i.imgur.com/k3tp4RD.jpg",
		"https://i.imgur.com/ORvdZDF.jpg", "https://i.imgur.com/TIFleAs.jpg", "https://i.imgur.com/jUNuWjK.jpg", "https://i.imgur.com/CDMrfoT.jpg", "https://i.imgur.com/UiyIUGa.jpg",
		"https://i.imgur.com/2g87UNf.jpg", "https://i.imgur.com/qkM3FJS.jpg", "https://i.imgur.com/dzI7tGI.jpg", "https://i.imgur.com/70q7TC3.jpg", "https://i.imgur.com/5oimNx8.jpg",
		"https://i.imgur.com/pI1fjb1.jpg", "https://i.imgur.com/10C5yFj.jpg", "https://i.imgur.com/6d2MJhq.jpg", "https://i.imgur.com/mXt6FPk.jpg", "https://i.imgur.com/ZKfCYpq.jpg",
		"https://i.imgur.com/aYNH6Yk.jpg", "https://i.imgur.com/UJqoLuP.jpg", "https://i.imgur.com/kInoSZE.jpg", "https://i.imgur.com/GgeN2ZU.jpg", "https://i.imgur.com/ts8m474.jpg",
		"https://i.imgur.com/Ff3EwuE.jpg", "https://i.imgur.com/ybor3lh.jpg", "https://i.imgur.com/ZaajpOW.jpg", "https://i.imgur.com/ku9qizs.jpg", "https://i.imgur.com/7q6QlLg.jpg",
		"https://i.imgur.com/QrepMKl.jpg", "https://i.imgur.com/AAfmWb8.jpg", "https://i.imgur.com/xDSfdPp.jpg", "https://i.imgur.com/N7LBxLq.jpg", "https://i.imgur.com/QsbgzpR.jpg",
		"https://i.imgur.com/Xd4rVq6.jpg", "https://i.imgur.com/Xk0JTGg.jpg", "https://i.imgur.com/vG93TlX.jpg", "https://i.imgur.com/J0cbVd3.jpg", "https://i.imgur.com/VT8eHfO.jpg",
		"https://i.imgur.com/nghV3uK.jpg", "https://i.imgur.com/OV2Upmf.jpg"
	],
	HiddenInstinct: [
		"https://i.imgur.com/a7vS1q2.jpg", "https://i.imgur.com/dkfnUZh.jpg", "https://i.imgur.com/SydLkFe.jpg", "https://i.imgur.com/tWGX4WE.jpg", "https://i.imgur.com/T95aY2A.jpg",
		"https://i.imgur.com/A9CKqpN.jpg", "https://i.imgur.com/ivg3WA9.jpg", "https://i.imgur.com/kxvPMzp.jpg", "https://i.imgur.com/T5J7krK.jpg", "https://i.imgur.com/haOLY5P.jpg",
		"https://i.imgur.com/lw2zPNL.jpg", "https://i.imgur.com/wtyGsnJ.jpg", "https://i.imgur.com/FBjaWSg.jpg", "https://i.imgur.com/OYTzmmf.jpg", "https://i.imgur.com/i7VGbL9.jpg",
		"https://i.imgur.com/0ECplPv.jpg", "https://i.imgur.com/prBu7rr.jpg", "https://i.imgur.com/9oP1iNu.jpg", "https://i.imgur.com/ejquuRv.jpg", "https://i.imgur.com/jcxeoJc.jpg",
		"https://i.imgur.com/yrzadc3.jpg", "https://i.imgur.com/q4RyIwN.jpg", "https://i.imgur.com/JLLYvFs.jpg", "https://i.imgur.com/ENE2m0P.jpg", "https://i.imgur.com/II3y66N.jpg",
		"https://i.imgur.com/ARMT5PJ.jpg", "https://i.imgur.com/Kym0iMN.jpg", "https://i.imgur.com/fRKyPNa.jpg", "https://i.imgur.com/O84yr6y.jpg", "https://i.imgur.com/C2fy7Vu.jpg",
		"https://i.imgur.com/2guqCJj.jpg", "https://i.imgur.com/BAPZEfh.jpg", "https://i.imgur.com/0vFkY2m.jpg", "https://i.imgur.com/PwRuX9K.jpg", "https://i.imgur.com/2miKOpt.jpg",
		"https://i.imgur.com/WHf0KwC.jpg", "https://i.imgur.com/3ugzoiD.jpg", "https://i.imgur.com/FFXXHP6.jpg", "https://i.imgur.com/whfjXMx.jpg", "https://i.imgur.com/zrevP4t.jpg",
		"https://i.imgur.com/P57oLCv.jpg", "https://i.imgur.com/ED922lM.jpg", "https://i.imgur.com/eulVGzw.jpg", "https://i.imgur.com/iVEbynz.jpg", "https://i.imgur.com/huHVoWW.jpg",
		"https://i.imgur.com/I69JbUU.jpg", "https://i.imgur.com/9Gmz7a4.jpg", "https://i.imgur.com/aQDjfH8.jpg", "https://i.imgur.com/o5TFIkS.jpg", "https://i.imgur.com/SFyqWhZ.jpg",
		"https://i.imgur.com/8s45cX4.jpg", "https://i.imgur.com/PfXozBS.jpg", "https://i.imgur.com/AAdjU06.jpg"
	]
}
const folderPath = "images/portfolioPage/portfolioProjects/portfolioProjects_";
var folderPath_withName = folderPath;
var currProjectNum;
// var folderName;
// var numFiles;

// Elements to Append, and adding their Classes
// Div Element
var addElement_div = document.createElement("div");
addElement_div.setAttribute("class", "portfolioProjects_artCell");
// Image Element
var addElement_img = document.createElement("img");
addElement_img.setAttribute("class", "lazyload");
addElement_div.appendChild(addElement_img);
var artworks_doc;																						// The Artworks

// Model Image Values
var modelImg_doc_scene = document.getElementById("portfolioProjects_artModelImgScene");
var modelImg_doc_imgBox = document.getElementById("portfolioProjects_artModelImg_picBox");
var modelImg_currSelcNum;
// Vertical Slider Values
// var modelImg_docVerSlider_box = document.getElementById("portfolioProjects_artModelImg_verBox");		// The Vertical Slider Box
// var modelImg_docVerSlider_items;																		// Vertical Slider Items
// var modelImg_docVerSlider_main;																			// Vertical Slider Main/Selected Item
// var modelImg_docVerSlider_prev1;																		// Vertical Slider Item Prev 1
// var modelImg_docVerSlider_prev2;																		// Vertical Slider Item Prev 2
// var modelImg_docVerSlider_prev3;																		// Vertical Slider Item Prev 3
// var modelImg_docVerSlider_next1;																		// Vertical Slider Item Next 1
// var modelImg_docVerSlider_next2;																		// Vertical Slider Item Next 2
// var modelImg_docVerSlider_next3;																		// Vertical Slider Item Next 3
// Vertical Slider, Elements to be Created
// var addElement_modelImg_verSlider_itemDiv = document.createElement("div");								// The Vertical Slider Item Div
// addElement_modelImg_verSlider_itemDiv.setAttribute("class", "portfolioProjects_artModelImg_verBoxItem");
// var addElement_verSlider_itemImg = document.createElement("img");										// The Vertical Slider Item Img
// addElement_verSlider_itemImg.setAttribute("class", "lazyload");
// addElement_modelImg_verSlider_itemDiv.appendChild(addElement_verSlider_itemImg);
// Model Image Carousel
var modelImg_doc_carousel = document.querySelector("#portfolioProjects_artModelImg_carousel");			// Carousel
var modelImg_carousel = new bootstrap.Carousel(modelImg_doc_carousel, {									// Initialise the Carousel			
	interval: false,
	wrap: true
});
var modelImg_doc_carouselScreen = document.getElementById("portfolioProjects_artModelImg_picScreen");	// Carousel Screen
var modelImg_doc_carousel_items;																		// Carousel Items
var modelImg_doc_carousel_currSelcItem;																	// The Current selected Item in the Carousel
// Model Image Carousel, Elements to be Created
var addElement_modelImg_carousel_itemDiv = document.createElement("div");								// The Model Img Carousel Div
addElement_modelImg_carousel_itemDiv.setAttribute("class", "portfolioProjects_artModelImg_horBoxItem carousel-item");
var addElement_modelImg_carousel_itemImg = document.createElement("img");								// The Model Img Carousel Img
addElement_modelImg_carousel_itemImg.setAttribute("class", "lazyload");
addElement_modelImg_carousel_itemDiv.appendChild(addElement_modelImg_carousel_itemImg);

// Loads the style once HTML body finish loading
function loadStyles_portfolioProjects_artworksSection(selcProject = 0) {
	// Stores current Project Number
	currProjectNum = selcProject;
	
	// Clears Artwork Showcase, if it already has artwork (child nodes)
	if (artShowcase.hasChildNodes()) {
		// artShowcase.innerHTML = '';
		artShowcase.replaceChildren();
	}
	
	var folderName = projectFolderNames[selcProject];
	var folderPath_withName = (folderPath + folderName);
	var numFiles = projectFolder_fileNum[selcProject];
	
	// Testing
	// var testFlag = false;
	// if(folderName == "Nutcracker" || folderName == "DeadDa") {
		// testFlag = true;
	// }
	
	// Sets the Images source
	for(let i=1; i <= numFiles; i++) {
		// addElement_img.src = folderPath_withName+"/img ("+i+").jpg";
		// addElement_img.setAttribute("data-src", folderPath_withName+"/img ("+i+").webp");
		// addElement_img.setAttribute("data-src", (testFlag) ? porjectFolder_fileLinks[folderName][i-1] : folderPath_withName+"/img ("+i+").webp");
		addElement_img.setAttribute("data-src", porjectFolder_fileLinks[folderName][i-1]);
		
		// Adds images to document
		artShowcase.appendChild(addElement_div.cloneNode(true));
	}
	
	// Gets the classes, and adds on click event, for the model img
	artworks_doc = document.getElementsByClassName("portfolioProjects_artCell");
	for(let i=0; i<artworks_doc.length; i++) {
		artworks_doc[i].addEventListener("click", modelImg_open);
		artworks_doc[i].setAttribute("data-num", parseInt(i));
	}
	
	// Sets up the Model Image
	portfolioProjects_modelImg_setUp(numFiles);
	
	console.log("Artwork Done!");
}

// Sets up Model Image Section
function portfolioProjects_modelImg_setUp(numOfArtworks) {
	// If Carousel not Empty, Empty it
	if(modelImg_doc_carouselScreen.hasChildNodes()) {
		// modelImg_doc_carouselScreen.innerHTML = "";
		modelImg_doc_carouselScreen.replaceChildren();
	}
	// If Vertical Slider not Empty, Empty it
	// if(modelImg_docVerSlider_box.hasChildNodes()) {
		// modelImg_docVerSlider_box.replaceChildren();
	// }
	
	for(let i=0; i<numOfArtworks; i++) {
		// Adds the Carousel Items to Doc
		// addElement_modelImg_carousel_itemImg.setAttribute("src", artworks_doc[i].firstChild.src);
		// addElement_modelImg_carousel_itemImg.src = artworks_doc[i].firstChild.dataset.src;
		addElement_modelImg_carousel_itemImg.setAttribute("data-src", artworks_doc[i].firstChild.dataset.src);
		// console.log("Image Src", artworks_doc[i].firstChild.dataset.src);
		modelImg_doc_carouselScreen.appendChild(addElement_modelImg_carousel_itemDiv.cloneNode(true));
		
		// Adds the Vertical Slider Items
		// addElement_verSlider_itemImg.src = artworks_doc[i].firstChild.dataset.src;
		// addElement_verSlider_itemImg.setAttribute("data-src", artworks_doc[i].firstChild.dataset.src);
		// modelImg_docVerSlider_box.appendChild(addElement_modelImg_verSlider_itemDiv.cloneNode(true));
	}
	
	// Gets the Carousel (Horizontal Slider) Items 
	modelImg_doc_carousel_items = document.getElementsByClassName("portfolioProjects_artModelImg_horBoxItem");
	// Gets the Vertical Slide Items
	// portfolioProjects_artModelImg_verBoxItem = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem");
}

// Opens Model Image
function modelImg_open() {
	// console.log("Pic source:", this.getElementsByTagName("img")[0].src);
	modelImg_currSelcNum = this.dataset.num;
	
	// Active (Selected) Image of Carousel
	modelImg_doc_carousel_items[modelImg_currSelcNum].classList.add("active");
	
	// modelImg_doc_carousel_currSelcItem = document.getElementsByClassName("active");
	
	// Positions Vertical Slider
	// portfolioProjects_loadStyles_verSlider();
	
	modelImg_doc_scene.style.display = "block";
	// modelImg_doc_imgBox.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].src;
}

// Previous Carousel Slide
function portfolioProjects_carouselPrev() {
	// console.log("Prev Current Selection, bef:", modelImg_currSelcNum);
	
	// modelImg_verSlider_prev();
	
	modelImg_currSelcNum = modelImg_changeCurrModelImgNum("red");
	
	// modelImg_carousel.to(modelImg_currSelcNum);
	modelImg_carousel.prev();
	
	// console.log("Prev Current Selection, aff:", modelImg_currSelcNum);
}

// Next Carousel Slide
function portfolioProjects_carouselNext() {
	// console.log("Next Current Selection, bef:", modelImg_currSelcNum);
	
	// modelImg_verSlider_next();
	
	modelImg_currSelcNum = modelImg_changeCurrModelImgNum("add");
	
	// modelImg_carousel.to(modelImg_currSelcNum);
	modelImg_carousel.next();
	
	// console.log("Next Current Selection, aff:", modelImg_currSelcNum);
}

// Close Model Image
function modelImg_close() {
	modelImg_doc_carousel_currSelcItem = document.getElementsByClassName("active");
	
	modelImg_doc_scene.style.display = "none";
	
	modelImg_doc_carousel_currSelcItem[0].classList.remove("active");
	
	// Get and Remove Special class from Vertical Slider
	// modelImg_docVerSlider_main = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItemSelc");		// Vertical Slider Main/Selected Item
	// modelImg_docVerSlider_main[0].classList.remove("portfolioProjects_artModelImg_verBoxItemSelc");
	// modelImg_docVerSlider_prev1 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_prev1");	// Vertical Slider Item Prev 1
	// modelImg_docVerSlider_prev1[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_prev1");
	// modelImg_docVerSlider_prev2 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_prev2");	// Vertical Slider Item Prev 2
	// modelImg_docVerSlider_prev2[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_prev2");
	// modelImg_docVerSlider_prev3 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_prev3");	// Vertical Slider Item Prev 3
	// modelImg_docVerSlider_prev3[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_prev3");
	// modelImg_docVerSlider_next1 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_next1");	// Vertical Slider Item Next 1
	// modelImg_docVerSlider_next1[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_next1");
	// modelImg_docVerSlider_next2 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_next2");	// Vertical Slider Item Next 2
	// modelImg_docVerSlider_next2[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_next2");
	// modelImg_docVerSlider_next3 = document.getElementsByClassName("portfolioProjects_artModelImg_verBoxItem_next3");	// Vertical Slider Item Next 3
	// modelImg_docVerSlider_next3[0].classList.remove("portfolioProjects_artModelImg_verBoxItem_next3");
}

// Positioning of Vertical Slider
function portfolioProjects_loadStyles_verSlider() {
	// Main/Selected Vertical Slide
	portfolioProjects_artModelImg_verBoxItem[modelImg_currSelcNum].classList.add("portfolioProjects_artModelImg_verBoxItemSelc");
	
	var prevSlides_max = (projectFolder_fileNum[currProjectNum]%2 > 0) ? Math.floor(projectFolder_fileNum[currProjectNum]/2) : (projectFolder_fileNum[currProjectNum]/2)-1;
	var nextSlides_max = Math.floor(projectFolder_fileNum[currProjectNum]/2);
	
	console.log("Prev Max:", prevSlides_max);
	console.log("Next Max:", nextSlides_max);
	
	// Top/Above Slides
	let i = 1;
	let j = 1;
	while(i <= prevSlides_max) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", i)].classList.add("portfolioProjects_artModelImg_verBoxItem_prev"+j);
		
		// If below 3 prev slides numbering, increase j by 1
		if(j < 3) {
			j++;
		}
		
		i++;
	}
	
	// for(let i=modelImg_changeCurrModelImgNum("red"), j=1; i>=0; i--) {
		// portfolioProjects_artModelImg_verBoxItem[i].classList.add("portfolioProjects_artModelImg_verBoxItem_prev"+j);
		// If below 3 prev slides numbering, increase j by 1
		// if(j < 3) {
			// j++;
		// }
	// }
	
	// Bottom/Below Slides
	let n = 1;
	let m = 1;
	while(n <= nextSlides_max) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", n)].classList.add("portfolioProjects_artModelImg_verBoxItem_next"+m);
		
		// If below 3 next slides numbering, increase m by 1
		if(m < 3) {
			m++;
		}
		n++;
	}
	
	// for(let i=modelImg_changeCurrModelImgNum("add"), j=1; i<projectFolder_fileNum[currProjectNum]; i++) {
		// portfolioProjects_artModelImg_verBoxItem[i].classList.add("portfolioProjects_artModelImg_verBoxItem_next"+j);
		// If below 3 next slides numbering, increase j by 1
		// if(j < 3) {
			// j++;
		// }
	// }
}

// Prev Verical Slide
function modelImg_verSlider_prev() {
	var mobPrev = "portfolioProjects_artModelImg_verBoxItem_prev";
	var mobNext = "portfolioProjects_artModelImg_verBoxItem_next";
	var mobMain = "portfolioProjects_artModelImg_verBoxItemSelc";
	var maxSides = 3;
	
	// Slide Next/Bottom 3 to Prev/Top 3
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", 4)].classList.remove(mobNext+3);
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", 4)].classList.add(mobPrev+3);
	
	// Slide Prev/Top 3 to Prev 2 and so on till Prev 1
	for(let i=3; i>1; i--) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", i)].classList.remove(mobPrev+i);
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", i)].classList.add(mobPrev+(i-1));
	}
	
	// Slide Prev/Top 1 to Main
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red")].classList.remove(mobPrev+1);
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red")].classList.add(mobMain);
	
	// Main to Next/Bottom 1
	portfolioProjects_artModelImg_verBoxItem[modelImg_currSelcNum].classList.remove(mobMain);
	portfolioProjects_artModelImg_verBoxItem[modelImg_currSelcNum].classList.add(mobNext+1);
	
	// Slide Next/Bottom 1 to Next 2 and so on till Last
	for(let i=1; i<maxSides; i++) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", i)].classList.remove(mobNext+i);
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", i)].classList.add(mobNext+(i+1));
	}
}

// Next Vertical Slide
function modelImg_verSlider_next() {
	var mobPrev = "portfolioProjects_artModelImg_verBoxItem_prev";
	var mobNext = "portfolioProjects_artModelImg_verBoxItem_next";
	var mobMain = "portfolioProjects_artModelImg_verBoxItemSelc";
	var maxSides = 3;
	
	// Slide Prev/Top 3 to Next/Bottom 3
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", 4)].classList.remove(mobPrev+3);
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", 4)].classList.add(mobNext+3);
	
	// Slide Next/Bottom 3 to Next 2 and so on till Next 1 
	for(let i=3; i>1; i--) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", i)].classList.remove(mobNext+i);
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add", i)].classList.add(mobNext+(i-1));
	}
	
	// Slide Next/Bottom 1 to Main
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add")].classList.remove(mobNext+1);
	portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("add")].classList.add(mobMain);
	
	// Main to Prev/Top 1
	portfolioProjects_artModelImg_verBoxItem[modelImg_currSelcNum].classList.remove(mobMain);
	portfolioProjects_artModelImg_verBoxItem[modelImg_currSelcNum].classList.add(mobPrev+1);
	
	// Slides Prev/Top 1 to Prev 2 and so on till top
	for(let i=1; i<maxSides; i++) {
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", i)].classList.remove(mobPrev+i);
		portfolioProjects_artModelImg_verBoxItem[modelImg_changeCurrModelImgNum("red", i)].classList.add(mobPrev+(i+1));
	}
}

// Calculates and Returns 
function modelImg_changeCurrModelImgNum(add_red, byAmount = 1) {
	var num;
	var currSelected_num = parseInt(modelImg_currSelcNum);
	
	if(add_red == "add") {
		// Increase modelImg_currSelcNum by Specified Amount (1 or otherwise), unless at max, then set to 0 (or by the amount increased from initial point past 0)
		num = (currSelected_num+byAmount <= projectFolder_fileNum[currProjectNum]-1) ? (currSelected_num+byAmount) : ((currSelected_num+byAmount)-projectFolder_fileNum[currProjectNum]);
	} else if(add_red == "red"){
		// Decrease modelImg_currSelcNum by Specified Amount (1 or otherwise), unless at 0, then set to Max (or by the amount decreased from initial point under max)
		num = (currSelected_num-byAmount >= 0) ? (currSelected_num-byAmount) : (projectFolder_fileNum[currProjectNum]+(currSelected_num-byAmount));
	}
	
	return num;
}

// Checks if img file exist
// function check_imgFileExist(folderNm, fileNm) {
	// Checks Online
	// var request = new XMLHttpRequest();
	// request.open("GET", "images/portfolioPage/portfolioProjects/portfolioProjects_"+folderNm+"/"+fileNm, true);
	// request.send();
	// request.onload = function() {
		// status = request.status;
		
		// // if(statusText == OK)
		// if (request.status == 200) {
			// console.log("image exists");
		// } else {
			// console.log("image doesn't exist");
		// }
	// }
	
	// Checks Local, for Testing only
	
// }

// check_imgFileExist("Nutcracker", "img (1).jpg")

// function checkImage(url) {
	// var request = new XMLHttpRequest();
	// request.open("GET", url, true);
	// request.send();
	// request.onload = function() {
		// status = request.status;
		// if (request.status == 200) //if(statusText == OK)
		// {
			// console.log("image exists");
		// } else {
			// console.log("image doesn't exist");
		// }
	// }
// }