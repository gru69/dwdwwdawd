"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[923], {
    20923: function(e, t, s) {
        s.r(t),
        s.d(t, {
            MintPage: function() {
                return en
            }
        });
        var n = s(73061)
          , l = s(69477)
          , a = s(71751)
          , r = s(88652)
          , i = s(89818)
          , o = s(34370)
          , c = s(36327)
          , d = s(37580)
          , u = s(5931);
        let m = (e,t)=>{
            let {data: s, ...n} = (0,
            u.Y)(e)
              , {data: l} = (0,
            c.Z)(t && s ? ["mintAssets", t, s] : null, e=>{
                let[t,s,n] = e
                  , l = n.find(e=>e.collectionId === s);
                if (l)
                    return l.assets.sort((e,t)=>{
                        let s = (0,
                        d.R)(e)
                          , n = (0,
                        d.R)(t);
                        return new i.Z(n).cmp(s)
                    }
                    ),
                    l
            }
            )
              , a = (0,
            o.useRef)();
            return (0,
            o.useEffect)(function() {
                l && (a.current = l)
            }, [l]),
            (0,
            o.useMemo)(()=>Object.assign(n, {
                data: null != l ? l : a.current
            }), [l, n])
        }
        ;
        var f = s(86879)
          , h = s(62227)
          , x = s(87822)
          , g = s(5430)
          , b = s(52660)
          , p = s(64074);
        let y = ()=>(0,
        n.jsx)(l.u, {
            text: (0,
            n.jsxs)("div", {
                className: "text-left",
                children: [(0,
                n.jsx)("div", {
                    children: "Since tiny SPL balances are grouped, if you want to send a specific amount,"
                }), (0,
                n.jsx)("div", {
                    children: "you will have to spilt/combine the balances before sending them out via your wallet."
                })]
            }),
            enterDelay: 0,
            children: (0,
            n.jsx)("img", {
                width: 20,
                height: 20,
                className: "cursor-help",
                src: "/assets/help.png",
                alt: "help"
            })
        });
        var j = s(98370)
          , w = s(9426);
        let v = e=>{
            let {open: t, children: s, className: l} = e;
            return ((0,
            o.useEffect)(function() {
                return t ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto",
                ()=>{
                    document.body.style.overflow = "auto"
                }
            }, [t]),
            t) ? (0,
            w.createPortal)((0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)("div", {
                    className: "fixed w-full h-full top-0 left-0"
                }), (0,
                n.jsx)("div", {
                    className: (0,
                    j.Z)("fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2", l),
                    children: s
                })]
            }), document.body) : null
        }
        ;
        var P = s(5742);
        let N = e=>{
            let {count: t=3, className: s} = e;
            return (0,
            n.jsx)("span", {
                children: Array.from({
                    length: t
                }, (e,t)=>(0,
                n.jsx)("span", {
                    className: (0,
                    j.Z)("animate-blink", s),
                    style: {
                        animationDelay: "".concat(250 * t, "ms")
                    },
                    children: "."
                }, t))
            })
        }
        ;
        var S = s(11700);
        let C = e=>{
            let {onError: t, onSuccess: s, sendTransactionResult: a} = e
              , {connection: r} = (0,
            P.R)();
            return ((0,
            o.useEffect)(function() {
                a && (async()=>{
                    try {
                        let e = await r.confirmTransaction({
                            blockhash: a.blockhash,
                            lastValidBlockHeight: a.lastValidBlockHeight,
                            signature: a.txId
                        }, "confirmed");
                        if (e.value.err)
                            throw Error(JSON.stringify(e.value.err));
                        null == s || s(e)
                    } catch (e) {
                        e instanceof Error && (null == t || t(e))
                    }
                }
                )()
            }, [r, t, s, a]),
            a) ? (0,
            n.jsxs)("div", {
                className: "w-full",
                children: [(0,
                n.jsx)("img", {
                    className: "w-3/4 mx-auto mb-4",
                    src: "/assets/ie-download.gif",
                    alt: "Confirming transaction"
                }), (0,
                n.jsx)(S.a, {
                    incrementInterval: 1e3
                }), (0,
                n.jsxs)("p", {
                    children: ["Sending transaction", (0,
                    n.jsx)(N, {})]
                }), (0,
                n.jsx)(l.ee, {
                    href: "https://solscan.io/tx/".concat(a.txId),
                    target: "_blank",
                    children: "View transaction"
                })]
            }) : null
        }
        ;
        var A = s(28416)
          , R = s(91561)
          , k = s(11647);
        let K = {
            publicKey: R.Keypair.generate().publicKey,
            signAllTransactions: ()=>{
                throw Error("read-only wallet")
            }
            ,
            signTransaction: ()=>{
                throw Error("read-only wallet")
            }
        }
          , B = ()=>{
            let {connection: e} = (0,
            P.R)()
              , {data: t} = (0,
            c.Z)(["tinySplProgram", e], e=>{
                let[t,s] = e;
                return new A.$r(k.aM,k.Rn,new A.Y7(s,K,{
                    commitment: s.commitment
                }))
            }
            );
            return t
        }
        ;
        var M = s(11048)
          , O = s(80698)
          , D = s(83980)
          , T = s(30410).Buffer;
        let[E] = R.PublicKey.findProgramAddressSync([T.from("collection_cpi")], O.PROGRAM_ID)
          , _ = new R.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s")
          , I = async e=>{
            let {connection: t, ixs: s, payer: n, lookupTableAddress: l} = e
              , {blockhash: a, lastValidBlockHeight: r} = await t.getLatestBlockhash()
              , i = l ? (await t.getAddressLookupTable(l)).value : void 0
              , o = new R.TransactionMessage({
                payerKey: n,
                recentBlockhash: a,
                instructions: s
            }).compileToV0Message(i ? [i] : void 0);
            return {
                transaction: new R.VersionedTransaction(o),
                blockhash: a,
                lastValidBlockHeight: r
            }
        }
        ;
        var L = s(81204);
        let Z = new R.PublicKey("tREeAmmEC1HmN8aPKnzPagu84sQAsXg8KGzX97EZP2n")
          , z = new R.PublicKey("Tree2dfRMEjvHKn8BfmQXmgcCcLiVtHqMKq5j9oKN5g");
        var G = s(30410).Buffer;
        let q = async e=>{
            let {assets: t, connection: s, tinySplProgram: n, signer: l} = e
              , a = t[0];
            if (!a)
                throw Error("At least one asset is required");
            let r = (0,
            L.P)(a);
            if (!r)
                throw Error("Collection Id not found, this should not happen. NFT might not be a valid tiny spl");
            let[i] = R.PublicKey.findProgramAddressSync([G.from("metadata"), _.toBuffer(), new R.PublicKey(r).toBuffer()], _)
              , [o] = R.PublicKey.findProgramAddressSync([G.from("metadata"), _.toBuffer(), new R.PublicKey(r).toBuffer(), G.from("edition")], _)
              , [c] = R.PublicKey.findProgramAddressSync([G.from(k.go), new R.PublicKey(r).toBuffer()], n.programId)
              , [u] = R.PublicKey.findProgramAddressSync([new R.PublicKey(a.compression.tree).toBuffer()], O.PROGRAM_ID)
              , [m] = R.PublicKey.findProgramAddressSync([Z.toBuffer()], O.PROGRAM_ID)
              , f = await Promise.all(t.map(async e=>await s.getAssetProof(new R.PublicKey(e.id))))
              , h = (await D.ConcurrentMerkleTreeAccount.fromAccountAddress(s, z)).getCanopyDepth()
              , x = f.map(e=>e.proof.map(e=>({
                pubkey: new R.PublicKey(e),
                isSigner: !1,
                isWritable: !1
            })).slice(0, e.proof.length - (h || 0)))
              , g = x.reduce((e,t)=>{
                var s;
                let n = (null !== (s = e.at(-1)) && void 0 !== s ? s : 0) + t.length;
                return e.push(n),
                e
            }
            , [])
              , b = x.flat()
              , p = await n.methods.combine(t.map(e=>new A.BN((0,
            d.R)(e))), t.map(e=>new R.PublicKey(e.id)), f.map(e=>[...new R.PublicKey(e.root.trim()).toBytes()]), t.map(e=>new A.BN(e.compression.leaf_id)), t.map(e=>e.compression.leaf_id), g, t.map(e=>e.compression.tree === z.toBase58())).accounts({
                leafOwner: l,
                leafDelegate: l,
                compressionProgram: D.PROGRAM_ID,
                collectionMint: r,
                tinySplAuthority: c,
                sourceMerkleTree: z,
                destinationMerkleTree: Z,
                systemProgram: R.SystemProgram.programId,
                authority: l,
                bubblegumSigner: E,
                collectionMetadata: i,
                editionAccount: o,
                logWrapper: D.SPL_NOOP_PROGRAM_ID,
                mplBubblegumProgram: O.PROGRAM_ID,
                newLeafOwner: l,
                tokenMetadataProgram: _,
                sourceTreeAuthority: u,
                destinationTreeAuthority: m,
                treeCreatorOrDelegate: c
            }).remainingAccounts(b).instruction();
            return I({
                connection: s,
                ixs: [R.ComputeBudgetProgram.setComputeUnitPrice({
                    microLamports: 5e4
                }), R.ComputeBudgetProgram.setComputeUnitLimit({
                    units: 14e6
                }), p],
                payer: l,
                lookupTableAddress: new R.PublicKey("Cg9fZtcBxxw8eobV4uvmQMYdkdxfex5zibR1QELnuoKp")
            })
        }
          , F = e=>{
            let {selectedMints: t, mutate: s, setSelectedMints: a} = e
              , r = (0,
            M.U)()
              , i = Object.keys(t).length
              , [c,d] = (0,
            o.useState)(!1)
              , {sendTransaction: u, publicKey: m} = (0,
            f.O)()
              , h = B()
              , [x,g] = (0,
            o.useState)()
              , [b,p] = (0,
            o.useState)(null)
              , y = c || !!b;
            return (0,
            o.useEffect)(function() {
                b || a({})
            }, [b, a]),
            (0,
            o.useEffect)(function() {
                g(void 0)
            }, [t]),
            (0,
            n.jsxs)(n.Fragment, {
                children: [(0,
                n.jsx)(V, {
                    mutate: s,
                    sendTransactionResult: b,
                    setSendTransactionResult: p,
                    setError: g
                }), i < 2 ? null : (0,
                n.jsx)(l.xG, {
                    className: "fixed bottom-0 !left-0 !top-auto !right-auto z-10",
                    children: (0,
                    n.jsx)(l.o8, {
                        className: "flex justify-end",
                        children: (0,
                        n.jsxs)("div", {
                            className: "flex flex-col items-end",
                            children: [(0,
                            n.jsx)(l.zx, {
                                disabled: y,
                                size: "lg",
                                className: (0,
                                j.Z)("font-bold", !y && "animate-bounce"),
                                onClick: async()=>{
                                    if (m)
                                        try {
                                            g(void 0),
                                            d(!0);
                                            let {blockhash: e, lastValidBlockHeight: s, transaction: n} = await q({
                                                connection: r,
                                                signer: m,
                                                tinySplProgram: h,
                                                assets: Object.values(t)
                                            })
                                              , l = await u(n, r);
                                            p({
                                                blockhash: e,
                                                lastValidBlockHeight: s,
                                                txId: l
                                            })
                                        } catch (e) {
                                            g('An error has occurred: "'.concat(e.message, '"'))
                                        } finally {
                                            d(!1)
                                        }
                                }
                                ,
                                children: c ? "Loading..." : "Combine (".concat(i, ")")
                            }), x && (0,
                            n.jsx)("p", {
                                className: "text-sm text-red-500",
                                children: x
                            })]
                        })
                    })
                })]
            })
        }
          , V = e=>(0,
        n.jsx)(v, {
            open: !!e.sendTransactionResult,
            className: "w-full max-w-3xl",
            children: (0,
            n.jsx)(H, {
                ...e
            })
        })
          , H = e=>{
            let {mutate: t, sendTransactionResult: s, setError: a, setSendTransactionResult: r} = e
              , [i,c] = (0,
            o.useState)(!1)
              , d = i ? (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("img", {
                    className: "mx-auto mb-4",
                    src: "/assets/smiley-face.png",
                    alt: "Smiley face"
                }), (0,
                n.jsx)("span", {
                    children: "Successfully combined tokens!"
                }), (0,
                n.jsx)("div", {
                    className: "flex justify-end",
                    children: (0,
                    n.jsx)(l.zx, {
                        onClick: ()=>{
                            r(null)
                        }
                        ,
                        children: "Done"
                    })
                })]
            }) : (0,
            n.jsx)(C, {
                sendTransactionResult: s,
                onError: e=>{
                    r(null),
                    a('An error has occurred: "'.concat(e.message, '"'))
                }
                ,
                onSuccess: async()=>{
                    await t(),
                    c(!0)
                }
            });
            return (0,
            n.jsxs)(l.Rz, {
                className: "w-full",
                children: [(0,
                n.jsxs)(l.ib, {
                    className: "flex justify-between items-center",
                    children: [(0,
                    n.jsx)("span", {
                        children: "Combining tokens"
                    }), i && (0,
                    n.jsx)(l.zx, {
                        onClick: async()=>{
                            r(null)
                        }
                        ,
                        children: (0,
                        n.jsx)("span", {
                            className: "close-icon"
                        })
                    })]
                }), (0,
                n.jsx)(l.GH, {
                    children: d
                })]
            })
        }
        ;
        var U = s(31220)
          , W = s(30410).Buffer;
        let Y = async e=>{
            let {asset: t, connection: s, tinySplProgram: n, sourceAmount: l, destinationAmounts: a, signer: r} = e
              , i = (0,
            L.P)(t);
            if (!i)
                throw Error("Collection Id not found, this should not happen. NFT might not be a valid tiny spl");
            let[o] = R.PublicKey.findProgramAddressSync([W.from("metadata"), _.toBuffer(), new R.PublicKey(i).toBuffer()], _)
              , [c] = R.PublicKey.findProgramAddressSync([W.from("metadata"), _.toBuffer(), new R.PublicKey(i).toBuffer(), W.from("edition")], _)
              , [d] = R.PublicKey.findProgramAddressSync([W.from(k.go), new R.PublicKey(i).toBuffer()], n.programId)
              , u = await s.getAssetProof(new R.PublicKey(t.id))
              , [m] = R.PublicKey.findProgramAddressSync([new R.PublicKey(t.compression.tree).toBuffer()], O.PROGRAM_ID)
              , [f] = R.PublicKey.findProgramAddressSync([Z.toBuffer()], O.PROGRAM_ID)
              , h = (await D.ConcurrentMerkleTreeAccount.fromAccountAddress(s, new R.PublicKey(u.tree_id))).getCanopyDepth()
              , x = u.proof.map(e=>({
                pubkey: new R.PublicKey(e),
                isSigner: !1,
                isWritable: !1
            })).slice(0, u.proof.length - (h || 0))
              , g = await n.methods.split(new A.BN(l), new R.PublicKey(t.id), [...new R.PublicKey(u.root.trim()).toBytes()], new A.BN(t.compression.leaf_id), t.compression.leaf_id, a.map(e=>new A.BN(e))).accounts({
                leafOwner: r,
                leafDelegate: r,
                compressionProgram: D.PROGRAM_ID,
                collectionMint: i,
                tinySplAuthority: d,
                sourceMerkleTree: u.tree_id,
                destinationMerkleTree: Z,
                systemProgram: R.SystemProgram.programId,
                authority: r,
                bubblegumSigner: E,
                collectionMetadata: o,
                editionAccount: c,
                logWrapper: D.SPL_NOOP_PROGRAM_ID,
                mplBubblegumProgram: O.PROGRAM_ID,
                newLeafOwner: r,
                tokenMetadataProgram: _,
                sourceTreeAuthority: m,
                destinationTreeAuthority: f,
                treeCreatorOrDelegate: d
            }).remainingAccounts(x).instruction();
            return I({
                connection: s,
                ixs: [R.ComputeBudgetProgram.setComputeUnitPrice({
                    microLamports: 5e4
                }), R.ComputeBudgetProgram.setComputeUnitLimit({
                    units: 14e6
                }), g],
                payer: r
            })
        }
          , Q = (e,t)=>e && t ? new i.Z(e).lessThanOrEqualTo(0) || new i.Z(t).lessThanOrEqualTo(0) ? "Both split amounts must be greater or equal to 100. This is to currently combat scam situations where users list 1 single token at a high price. We are working on a better solution and will update this soon." : null : "Split amount is required"
          , X = e=>{
            let {mintDetails: t, onClose: s, mutate: l} = e;
            return (0,
            n.jsx)(v, {
                open: !!t,
                className: "w-full max-w-3xl",
                children: (0,
                n.jsx)(J, {
                    mintDetails: t,
                    mutate: l,
                    onClose: s
                })
            })
        }
          , J = e=>{
            var t, s, a, r, c, u, m, h, x, g, p, y, j, w, v;
            let {mintDetails: P, onClose: N, mutate: S} = e
              , A = P ? (0,
            d.R)(P) : void 0
              , [R,k] = (0,
            o.useState)()
              , [K,O] = (0,
            o.useState)()
              , [D,T] = (0,
            o.useState)(!1)
              , {sendTransaction: E, publicKey: _} = (0,
            f.O)()
              , I = B()
              , L = (0,
            M.U)()
              , [Z,z] = (0,
            o.useState)()
              , [G,q] = (0,
            o.useState)(null)
              , [F,V] = (0,
            o.useState)(!1)
              , H = Q(R, K)
              , W = (0,
            o.useRef)(!1);
            if ((0,
            o.useEffect)(function() {
                if (!A || W.current)
                    return;
                let e = new i.Z(A).div(2).ceil()
                  , t = new i.Z(A).sub(e);
                k(e.toFixed()),
                O(t.toFixed()),
                W.current = !0
            }, [A]),
            !A || !P)
                return null;
            let X = F ? (0,
            n.jsx)($, {
                formattedInitialAmount: "".concat((0,
                b.d)(null != A ? A : "0"), " ").concat(null !== (g = null === (s = P.content) || void 0 === s ? void 0 : null === (t = s.metadata) || void 0 === t ? void 0 : t.symbol) && void 0 !== g ? g : ""),
                formattedLeftAmount: "".concat((0,
                b.d)(null != R ? R : "0"), " ").concat(null !== (p = null === (r = P.content) || void 0 === r ? void 0 : null === (a = r.metadata) || void 0 === a ? void 0 : a.symbol) && void 0 !== p ? p : ""),
                formattedRightAmount: "".concat((0,
                b.d)(null != K ? K : "0"), " ").concat(null !== (y = null === (u = P.content) || void 0 === u ? void 0 : null === (c = u.metadata) || void 0 === c ? void 0 : c.symbol) && void 0 !== y ? y : ""),
                onClose: N
            }) : G ? (0,
            n.jsx)(C, {
                sendTransactionResult: G,
                onError: e=>{
                    q(null),
                    z('An error has occurred: "'.concat(e.message, '"'))
                }
                ,
                onSuccess: async()=>{
                    await S(),
                    q(null),
                    V(!0)
                }
            }) : (0,
            n.jsxs)(n.Fragment, {
                children: ["Split", " ", (0,
                n.jsxs)("span", {
                    className: "font-bold",
                    children: [(0,
                    b.d)(A), " ", null !== (j = null === (m = P.content.metadata) || void 0 === m ? void 0 : m.symbol) && void 0 !== j ? j : ""]
                }), " ", "into", (0,
                n.jsxs)("div", {
                    className: "flex gap-2 items-center mt-4",
                    children: [(0,
                    n.jsxs)("div", {
                        className: "flex gap-1 items-center",
                        children: [(0,
                        n.jsx)(U.h3, {
                            isAllowed: e=>new i.Z(e.value ? e.value : "0").lt(A),
                            allowNegative: !1,
                            decimalScale: 0,
                            value: R,
                            onValueChange: e=>{
                                k(e.value);
                                let t = new i.Z(e.value ? e.value : "0");
                                O(new i.Z(A).sub(t).toFixed())
                            }
                            ,
                            thousandSeparator: ",",
                            customInput: l.oi
                        }), (0,
                        n.jsx)("span", {
                            className: "font-bold",
                            children: null !== (w = null === (h = P.content.metadata) || void 0 === h ? void 0 : h.symbol) && void 0 !== w ? w : ""
                        })]
                    }), "and", (0,
                    n.jsx)("div", {
                        className: "font-bold",
                        children: (0,
                        n.jsxs)("span", {
                            children: [(0,
                            b.d)(null != K ? K : "0"), " ", null !== (v = null === (x = P.content.metadata) || void 0 === x ? void 0 : x.symbol) && void 0 !== v ? v : ""]
                        })
                    })]
                }), (0,
                n.jsx)("span", {
                    className: "text-sm",
                    children: H
                }), Z && (0,
                n.jsx)("span", {
                    className: "text-sm text-red-500",
                    children: Z
                }), (0,
                n.jsx)("div", {
                    className: "flex justify-end",
                    children: (0,
                    n.jsx)(l.zx, {
                        disabled: !!H || D,
                        className: "font-bold",
                        onClick: async()=>{
                            if (_)
                                try {
                                    T(!0),
                                    z(void 0);
                                    let {blockhash: e, lastValidBlockHeight: t, transaction: s} = await Y({
                                        asset: P,
                                        connection: L,
                                        destinationAmounts: [null != R ? R : "0", null != K ? K : "0"],
                                        signer: _,
                                        sourceAmount: A,
                                        tinySplProgram: I
                                    })
                                      , n = await E(s, L);
                                    q({
                                        blockhash: e,
                                        lastValidBlockHeight: t,
                                        txId: n
                                    })
                                } catch (e) {
                                    z('An error has occurred: "'.concat(e.message, '"'))
                                } finally {
                                    T(!1)
                                }
                        }
                        ,
                        children: D ? (0,
                        n.jsx)("span", {
                            children: "Loading..."
                        }) : "Split"
                    })
                })]
            });
            return (0,
            n.jsxs)(l.Rz, {
                className: "w-full",
                children: [(0,
                n.jsxs)(l.ib, {
                    className: "flex justify-between items-center",
                    children: [(0,
                    n.jsx)("span", {
                        children: "Split token"
                    }), !G && (0,
                    n.jsx)(l.zx, {
                        onClick: N,
                        children: (0,
                        n.jsx)("span", {
                            className: "close-icon"
                        })
                    })]
                }), (0,
                n.jsx)(l.GH, {
                    children: X
                })]
            })
        }
          , $ = e=>{
            let {formattedInitialAmount: t, formattedLeftAmount: s, formattedRightAmount: a, onClose: r} = e;
            return (0,
            n.jsxs)("div", {
                children: [(0,
                n.jsx)("img", {
                    className: "mx-auto mb-4",
                    src: "/assets/smiley-face.png",
                    alt: "Smiley face"
                }), (0,
                n.jsxs)("span", {
                    children: ["Successfully split", " ", (0,
                    n.jsx)("span", {
                        className: "font-bold",
                        children: t
                    }), " into", " ", (0,
                    n.jsx)("span", {
                        className: "font-bold",
                        children: s
                    }), " and", " ", (0,
                    n.jsx)("span", {
                        className: "font-bold",
                        children: a
                    })]
                }), (0,
                n.jsx)("div", {
                    className: "flex justify-end",
                    children: (0,
                    n.jsx)(l.zx, {
                        onClick: r,
                        children: "Done"
                    })
                })]
            })
        }
          , ee = [{
            id: "id",
            columns: [{
                header: "ID",
                accessorKey: "id",
                cell: e=>{
                    var t;
                    return (0,
                    n.jsx)(l.ee, {
                        className: "overflow-hidden overflow-ellipsis whitespace-nowrap",
                        href: (0,
                        p.q)(null !== (t = e.getValue()) && void 0 !== t ? t : ""),
                        target: "_blank",
                        children: e.getValue()
                    })
                }
                ,
                sortingFn: (e,t)=>{
                    var s, n;
                    return (null !== (s = e.original.id) && void 0 !== s ? s : "").toLowerCase().localeCompare((null !== (n = t.original.id) && void 0 !== n ? n : "").toLowerCase())
                }
                ,
                meta: {
                    dataClassName: "hidden sm:table-cell overflow-hidden text-ellipsis",
                    headerClassName: "!hidden sm:!table-cell"
                }
            }]
        }, {
            id: "amount",
            columns: [{
                header: "Amount",
                accessorKey: "content",
                cell: e=>{
                    let t = (0,
                    d.R)(e.row.original)
                      , s = (0,
                    b.d)(t);
                    return "0" === s ? "Loading..." : s
                }
                ,
                sortingFn: (e,t)=>new i.Z((0,
                d.R)(e.original)).cmp(new i.Z((0,
                d.R)(t.original)))
            }]
        }]
          , et = e=>{
            let {balances: t, mutate: s, ownerPublicKey: a} = e
              , [r,c] = (0,
            o.useState)(null)
              , [u,m] = (0,
            o.useState)({})
              , b = Object.keys(u).length
              , {publicKey: p} = (0,
            f.O)()
              , j = (null == p ? void 0 : p.toBase58()) === a;
            (0,
            o.useEffect)(function() {
                m({})
            }, [t]);
            let[w,v] = (0,
            o.useState)([])
              , P = (0,
            h.b7)({
                data: t,
                columns: ee,
                state: {
                    sorting: w
                },
                onSortingChange: v,
                getCoreRowModel: (0,
                x.sC)(),
                getSortedRowModel: (0,
                x.tj)()
            })
              , N = P.getHeaderGroups().at(-1);
            if (!N)
                return null;
            let S = e=>{
                let s = !!u[e.id]
                  , a = !s && b >= 2 || t.length < 2
                  , r = (0,
                n.jsx)(l.XZ, {
                    className: "[&>div:before]:box-content [&>div>span:after]:box-content [&>div>span]:h-[20px]",
                    disabled: a,
                    checked: s,
                    onChange: t=>{
                        let s = t.target.checked;
                        m(t=>s ? {
                            ...t,
                            [e.id]: e
                        } : (delete t[e.id],
                        {
                            ...t
                        }))
                    }
                });
                return a ? (0,
                n.jsx)(l.u, {
                    className: "text-black",
                    text: t.length < 2 ? "You must have more than one balance to combine" : "You can only combine ".concat(2, " balances at a time"),
                    enterDelay: 0,
                    children: r
                }) : r
            }
            ;
            return (0,
            n.jsxs)(n.Fragment, {
                children: [j && (0,
                n.jsxs)(n.Fragment, {
                    children: [(0,
                    n.jsx)(X, {
                        mintDetails: r,
                        onClose: ()=>{
                            c(null)
                        }
                        ,
                        mutate: s
                    }), (0,
                    n.jsx)(F, {
                        mutate: s,
                        selectedMints: u,
                        setSelectedMints: m
                    })]
                }), (0,
                n.jsxs)(l.iA, {
                    className: "h-[1px] table-fixed",
                    children: [(0,
                    n.jsx)(l.ss, {
                        children: (0,
                        n.jsxs)(l.SC, {
                            children: [j && (0,
                            n.jsxs)(l.bi, {
                                disabled: !0,
                                className: "flex items-center w-28",
                                children: ["Combine ", (0,
                                n.jsx)(y, {})]
                            }), N.headers.map(e=>{
                                var t, s;
                                return (0,
                                n.jsx)(l.bi, {
                                    disabled: !e.column.getCanSort(),
                                    onClick: e.column.getToggleSortingHandler(),
                                    className: null === (t = e.column.columnDef.meta) || void 0 === t ? void 0 : t.headerClassName,
                                    children: (0,
                                    n.jsxs)("div", {
                                        className: "flex justify-between items-center",
                                        children: [(0,
                                        h.ie)(e.column.columnDef.header, e.getContext()), null !== (s = ({
                                            asc: (0,
                                            n.jsx)(g.s, {
                                                width: 24,
                                                className: "rotate-90"
                                            }),
                                            desc: (0,
                                            n.jsx)(g.s, {
                                                width: 24,
                                                className: "-rotate-90"
                                            })
                                        })[e.column.getIsSorted()]) && void 0 !== s ? s : null]
                                    })
                                }, e.id)
                            }
                            ), j && (0,
                            n.jsxs)(l.bi, {
                                disabled: !0,
                                className: "flex items-center w-24",
                                children: ["Split ", (0,
                                n.jsx)(y, {})]
                            })]
                        })
                    }), (0,
                    n.jsx)(l.RM, {
                        children: P.getRowModel().rows.map(e=>{
                            let t = (0,
                            d.R)(e.original)
                              , s = new i.Z(t).lessThanOrEqualTo(1) ? (0,
                            n.jsx)(l.u, {
                                className: "text-black",
                                text: "Amount needs to be more than 1 for balance to be split",
                                enterDelay: 0,
                                children: (0,
                                n.jsx)(l.zx, {
                                    disabled: !0,
                                    children: "Split"
                                })
                            }) : (0,
                            n.jsx)(l.zx, {
                                onClick: ()=>{
                                    c(e.original)
                                }
                                ,
                                children: "Split"
                            });
                            return (0,
                            n.jsxs)(l.SC, {
                                className: "!h-14",
                                children: [j && (0,
                                n.jsx)(l.es, {
                                    className: "flex justify-center !py-1",
                                    children: S(e.original)
                                }), e.getVisibleCells().map(e=>{
                                    var t;
                                    return (0,
                                    n.jsx)(l.es, {
                                        className: null === (t = e.column.columnDef.meta) || void 0 === t ? void 0 : t.dataClassName,
                                        children: (0,
                                        h.ie)(e.column.columnDef.cell, e.getContext())
                                    }, e.id)
                                }
                                ), j && (0,
                                n.jsx)(l.es, {
                                    className: "flex justify-center",
                                    children: s
                                })]
                            }, e.id)
                        }
                        )
                    })]
                })]
            })
        }
          , es = e=>{
            var t;
            let {ownerMintInfo: s, ownerPublicKey: a} = e
              , {publicKey: r} = (0,
            f.O)()
              , i = !!r
              , o = (null == r ? void 0 : r.toBase58()) === a;
            return (0,
            n.jsxs)(l.GH, {
                className: "flex gap-8",
                children: [(0,
                n.jsx)(l.qE, {
                    square: !0,
                    size: 128,
                    src: s.logo
                }), (0,
                n.jsxs)("div", {
                    className: "flex flex-col justify-between",
                    children: [(0,
                    n.jsxs)("div", {
                        children: [(0,
                        n.jsxs)("span", {
                            className: "text-2xl font-bold",
                            children: [(0,
                            b.d)(s.amount), " ", s.symbol]
                        }), (0,
                        n.jsx)("p", {
                            children: null !== (t = s.description) && void 0 !== t ? t : ""
                        })]
                    }), (0,
                    n.jsx)("div", {
                        children: (!i || !o) && (0,
                        n.jsxs)(n.Fragment, {
                            children: [(0,
                            n.jsx)(l.Z0, {
                                orientation: "horizontal"
                            }), (0,
                            n.jsx)("p", {
                                className: "mt-2 text-sm",
                                children: i ? "Connected wallet isn't the owner of these tokens." : "If this is your wallet, connect it to manage your tiny SPL balances"
                            })]
                        })
                    })]
                })]
            })
        }
          , en = e=>{
            let {mint: t, publicKey: s} = e
              , {data: i, mutate: o} = m(s, t);
            return i ? (0,
            n.jsx)("div", {
                className: "pt-12 pb-24",
                children: (0,
                n.jsxs)(l.Rz, {
                    className: "w-full",
                    children: [(0,
                    n.jsxs)(l.ib, {
                        children: [i.collectionName, " (Owner: ", (0,
                        r.x)(s), ")"]
                    }), (0,
                    n.jsx)(es, {
                        ownerPublicKey: s,
                        ownerMintInfo: i
                    }), (0,
                    n.jsx)("h2", {
                        className: "text-lg",
                        children: "Balances:"
                    }), (0,
                    n.jsx)(et, {
                        ownerPublicKey: s,
                        balances: i.assets,
                        mutate: o
                    })]
                })
            }) : (0,
            n.jsx)(a.a, {})
        }
    }
}]);
