(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

;; prints to console
(enable-console-print!)
(println "Yo, yo Teeapane")

;; introduce state into application via global atom
;; Fourth example
(def app-state
  (atom
    {:app/title "Animals"
     :animals/list
     [[1 "Tiger"] [2 "Killer Whale"] [3 "parrot"] [4 "dog"] [5 "monkey"]
      [6 "Snake"] [7 "aardvark"] [8 "dolphin"] [9 "chameleon"] [10 "fly"]]}))

(defmulti read (fn [env key params] key))

(defmethod read :default
  [{:keys [state] :as en} key params]
  (let [st @state]
    (if-let [[_ value] (find st key)]
      {:value value}
      {:value :not-found})))

(defmethod read :animals/list
  [{:keys [state] :as env} key {:keys [start end]}]
  {:value (subvec (:animals/list @state) start end)})

(defui AnimalsList
  static om/IQueryParams
  (params [this]
   {:start 0 :end 10})
  static om/IQuery
  (query [this]
    '[:app/title (:animals/list {:start ?start :end ?end})])
  Object
  (render [this]
    (let [{:keys [app/title animals/list]} (om/props this)]
      (dom/div nil
       (dom/h2 nil title)
       (apply dom/ul nil
        (map
          (fn [[i name]]
            (dom/li nil (str i ". " name)))
          list))))))

;; re-renders root
(def reconciler
  (om/reconciler
    {:state app-state
     :parser (om/parser {:read read})}))

(om/add-root! reconciler
  AnimalsList (gdom/getElement "app"))

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

;; example 3 mutate/read
;;(defn read [{:keys [state] :as env} key params]
  ;;(let [st @state]
    ;;(if-let [[_ value] (find st key)]
      ;;{:value value}
      ;;{:value :not-found})))

;;(defn mutate [{:keys [state] :as env} key params]
  ;;(if (= 'increment key)
    ;;{:value {:keys [:count]}
     ;;:action #(swap! state update-in [:count] inc)}
    ;;{:value :not-found}))

;; creates incremental counter button
;;(defui Counter
  ;;static om/IQuery
  ;;(query [this]
    ;;[:count])
  ;;Object
  ;;(render [this]
    ;;(let [{:keys [count]} (om/props this)]
      ;;(dom/div nil
        ;;(dom/span nil (str "Count: " count))
        ;;(dom/button
          ;;#js {:onClick
               ;;(fn [e]
                ;; (swap! app-state update-in [:count] inc))}
          ;;"Click me!")))))
