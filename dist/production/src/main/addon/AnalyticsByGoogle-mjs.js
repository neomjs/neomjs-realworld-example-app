(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{7:function(e,a,t){"use strict";t.r(a);var o=t(0);class n extends o.a{static getConfig(){return{className:"Neo.main.addon.AnalyticsByGoogle",singleton:!0}}constructor(e){super(e),this.insertGoogleAnalyticsScript()}insertGoogleAnalyticsScript(){function e(){dataLayer.push(arguments)}window.dataLayer=window.dataLayer||[],e("js",new Date),e("config",Neo.config.gtagId);const a=document.createElement("script");Object.assign(a,{async:!0,src:`https://www.googletagmanager.com/gtag/js?id=${Neo.config.gtagId}`}),document.head.appendChild(a)}}Neo.applyClassConfig(n);let s=Neo.create(n);Neo.applyToGlobalNs(s),a.default=s}}]);