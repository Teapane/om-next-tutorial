(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

;; prints to console
(enable-console-print!)
(println "Yo, yo Teeapane")

;; introduce state into application via global atom
(def app-state (atom {:count 0}))

;; creates incremental counter button
(defui Counter
  Object
  (render [this]
    (let [{:keys [count]} (om/props this)]
      (dom/div nil
        (dom/span nil (str "Count: " count))
        (dom/button
          #js {:onClick
               (fn [e]
                 (swap! app-state update-in [:count] inc))}
          "Click me!")))))

;; re-renders root
(def reconciler
  (om/reconciler {:state app-state}))

(om/add-root! reconciler
  Counter (gdom/getElement "app"))

;; first example
;;(defui HelloWorld
  ;;Object
  ;;(render [this]
    ;;(dom/div nil (get (om/props this) :title))))

;;(def hello (om/factory HelloWorld))

;; first example
;;(js/ReactDOM.render
  ;;(hello {:title "Hello, World!"})
  ;;(gdom/getElement "app"))

;; Second Example
;;(js/ReactDOM.render
  ;;(apply dom/div nil
    ;;(map #(hello {:title (str "Hello " %)})
      ;;(range 10)))
  ;;(gdom/getElement "app"))
