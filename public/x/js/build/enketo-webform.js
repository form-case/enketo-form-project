// Importación de módulos necesarios
import {a as v, b as p, c as o, d as S, e as b, f as a, g as i, h as f, i as s, l as d, m as k} from "./chunks/chunk-DXHOMGW7.js";
import {m as w, n as r} from "./chunks/chunk-ONMNB3GH.js";
import "./chunks/chunk-3RPRB7E5.js";

// Función para registrar el Service Worker
function C(e) {
    return "serviceWorker"in navigator ? window.addEventListener("load", () => {
        navigator.serviceWorker.register(`${r.basePath}/x/offline-app-worker.js`).then(t => {
            console.log("Offline application service worker registration successful with scope: ", t.scope),
            setInterval( () => {
                console.log("Checking for offline application cache service worker update"),
                t.update()
            }
            , 60 * 60 * 1e3),
            t.active && u(!0),
            t.addEventListener("updatefound", () => {
                let n = t.installing;
                n.addEventListener("statechange", () => {
                    n.state === "activated" && (console.log("New offline application service worker activated!"),
                    document.dispatchEvent(a.ApplicationUpdated()))
                }
                )
            }
            )
        }
        , t => {
            console.error("Offline application service worker registration failed: ", t),
            u(!0)
        }
        )
    }
    ) : (location.protocol.startsWith("http:") ? console.error("Service workers not supported on this http URL (insecure)") : console.error("Service workers not supported on this browser. This form cannot launch online"),
    u(!1)),
    Promise.resolve(e)
}

// Función para indicar si la aplicación es capaz de lanzar offline
function u(e=!0) {
    document.dispatchEvent(a.OfflineLaunchCapable({
        capable: e
    }))
}

// Objeto que gestiona la inicialización del Service Worker
var m = {
    init: C,
    get serviceWorkerScriptUrl() {
        return "serviceWorker"in navigator && navigator.serviceWorker.controller ? navigator.serviceWorker.controller.scriptURL : null
    }
};

// Elementos del DOM y configuración inicial
var U = document.querySelector(".main-loader")
  , O = document.querySelector(".main > .paper > .form-header")
  , h = {
    enketoId: r.enketoId,
    // Eliminamos xformUrl ya que cargaremos el XForm localmente
    defaults: r.defaults
}
  , W = document.createRange();

// Inicialización de la aplicación
I();

if (true) // Forzamos el modo offline
    console.log("App in offline-capable mode."),
    // Eliminamos la URL del XForm, no es necesaria porque usaremos uno local
    delete h.xformUrl,
    A(),
    // Cargamos el XForm desde la carpeta public
    fetch('/fC6DX8UU') // Ruta al archivo local
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load local XForm');
            }
            return response.text();
        })
        .then(xformContent => {
            // Almacenamos el contenido del XForm en h
            h.xformContent = xformContent;
            // Continuamos con el flujo normal de inicialización
            return m.init(h).then(p).then(d.init).then(y).then(_).then(d.updateMaxSubmissionSize).then(E).then(L).then(e => (e.languages.forEach(b),
            e)).then(d.updateMedia).then(F).catch(x);
        });

// Función para actualizar el tamaño máximo de envío
function E(e) {
    return e.maxSize && (r.maxSize = e.maxSize),
    e
}

// Función para manejar errores
function x(e) {
    e = typeof e == "string" ? new Error(e) : e,
    U.classList.add("fail"),
    e.status === 401 ? window.location.href = `${r.loginUrl}?return_url=${encodeURIComponent(window.location.href)}` : e.status === 404 ? i.alertLoadErrors([e.message], null, {
        omitIntro: !0,
        omitSupportContact: !0
    }) : (Array.isArray(e) || (e = [e.message || o("error.unknown")]),
    i.alertLoadErrors(e, o("alert.loaderror.entryadvice")))
}

// Función para inicializar eventos de estado offline y actualizar la aplicación
function A() {
    document.addEventListener(a.OfflineLaunchCapable().type, e => {
        let {capable: t} = e.detail;
        i.updateStatus.offlineCapable(t);
        let n = m.serviceWorkerScriptUrl;
        n && s.getServiceWorkerVersion(n).then(i.updateStatus.applicationVersion)
    }
    ),
    document.addEventListener(a.ApplicationUpdated().type, () => {
        i.feedback(o("alert.appupdated.msg"), 20, o("alert.appupdated.heading"))
    }
    )
}

// Función para manejar la actualización del formulario
function F(e) {
    return document.addEventListener(a.FormUpdated().type, () => {
        i.feedback(o("alert.formupdated.msg"), 20, o("alert.formupdated.heading"))
    }
    ),
    e
}

// Función para gestionar la purga de la base de datos local
function I() {
    let e = document.querySelector(".side-slider__advanced__button.flush-db");
    e && e.addEventListener("click", () => {
        i.confirm({
            msg: o("confirm.deleteall.msg"),
            heading: o("confirm.deleteall.heading")
        }, {
            posButton: o("confirm.deleteall.posButton")
        }).then(t => {
            if (!t)
                throw new Error("Cancelled by user");
            return f.flush()
        }
        ).then( () => {
            location.reload()
        }
        ).catch( () => {}
        )
    }
    )
}

// Función para gestionar el branding del formulario
function y(e) {
    let t = document.querySelector(".form-header__branding img")
      , n = r.offline ? "data-offline-src" : "src";
    return t && e.branding && e.branding.source && t.src !== e.branding.source && (t.src = "",
    t.setAttribute(n, e.branding.source)),
    t.classList.remove("hide"),
    e
}

// Función para cambiar el tema del formulario
function _(e) {
    return e.form && e.model ? i.swapTheme(e) : Promise.reject(new Error("Received form incomplete"))
}

// Función para gestionar la inicialización del modelo del formulario
function z(e, t) {
    let n, l, g = null;
    for (let c in t)
        Object.prototype.hasOwnProperty.call(t, c) && (n = n || new v(e,{
            full: !1
        }),
        l = l || n.init(),
        Object.prototype.hasOwnProperty.call(t, c) && n.node(c).setVal(t[c]),
        g = n.getStr());
    return g
}

// Función para inicializar el formulario en el DOM
function L(e) {
    let t = W.createContextualFragment(e.form);
    O.after(t);
    let n = document.querySelector("form.or");
    return k.init(n, {
        modelStr: e.model,
        instanceStr: z(e.model, r.defaults),
        external: e.externalData,
        survey: e
    }).then(l => (e.languages = l.languages,
    document.querySelector("head>title").textContent = w.getTitleFromFormStr(e.form),
    r.print && i.applyPrintStyle(),
    S(n),
    e))
}
//# sourceMappingURL=enketo-webform.js.map
