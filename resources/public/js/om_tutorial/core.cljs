(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]))

;; prints to js console
(enable-console-print!)
(println "Tutorial, part 2")

(def init-data
  {:list/one [{:name "Tyler" :points 10}
              {:name "Teapane" :points 0}
              {:name "John" :points 1}]
   :list/two [{:name "Mary" :points 12 :age 100}
              {:name "Kate" :points 1}]})

(defmulti read om/dispatch)

(defn get-people [state key]
  (let [st @state]
    (into [] (map #(get-in st %)) (get st key))))

(defmethod read :list/one
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defmethod read :list/two
  [{:keys [state] :as env} key params]
  {:value (get-people state key)})

(defui Person
  static om/Ident
  (ident [this {:keys [name]}]
         [:person/by-name name])
  static om/IQuery
  (query [this]
         `[:name :points]))

(defui RootView
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Person)]
      `[{:list/one ~subquery} {:list/two ~subquery}])))

(defmulti mutate om/dispatch)

;; increment the point values by name
(defmethod mutate 'points/increment
  [{:keys [state]} _ {:keys [name]}]
  {:action
   (fn []
     (swap! state update-in
       [:person/by-name name :points]
       inc))})

;; decrement the point values by name
(defmethod mutate 'points/decrement
  [{:keys [state] _ {:keys [name]}}]
  {:action
   (fn []
     (swap! state update-in
      [:person/by-name name :points]
      #(let [n (dec %)] (if (neg? n) 0 n))))})

