function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()));
   }
   
   
   function getTimeFrom(startTime){
     const nowd =  new Date();
     const total = Date.parse(nowd)-Date.parse(startTime);
     const seconds = Math.floor( (total/1000) % 60 );
     const minutes = Math.floor( (total/1000/60) % 60 );
     const hours = Math.floor( (total/(1000*60*60)) % 24 );
     const daysAll = Math.floor( total/(1000*60*60*24) );
     const years = Math.floor( daysAll/365 );
     const months = monthDiff(startTime,nowd)%12;
     const days = daysAll%31 + 1;
   
     return {
       total,
       months,
       years,
       days,
       hours,
       minutes,
       seconds
     };
   }
   
   function seconds_si(seconds) {
     switch(seconds) {
       case 1: return seconds+" sekundo";
       case 2: return seconds+" sekundi";
       case 3:
       case 4: return seconds+" sekunde";
       default: return seconds+" sekund";
     }
   }
   
   function minutes_si(minutes) {
     switch(minutes) {
       case 1: return minutes+" minuto";
       case 2: return minutes+" minuti";
       case 3:
       case 4: return minutes+" minute";
       default: return minutes+" minut";
     }
   }
   
   function hours_si(hours) {
     switch(hours) {
       case 1: return hours+" uro";
       case 2: return hours+" uri";
       case 3:
       case 4: return hours+" ure";
       default: return hours+" ur";
     }
   }
   
   
   function days_si(days) {
     switch(days) {
       case 1: return days+" dan";
         default: return days+" dni";
     }
   }
   
   function months_si(months) {
     switch(months) {
       case 1: return months+" mesec";
       case 2: return months+" meseca";
       case 3:
       case 4: return months+" mesece";
       default: return months+" mesecev";
     }
   }
   
   function years_si(years) {
     switch(years) {
       case 1: return years+" let";
       case 2: return years+" leti";
       case 3:
       case 4: return years+" leta";
       default: return years+" let";
     }
   }
   
   
   function get_duration_si(duration) {
       return years_si(duration.years)+" "+months_si(duration.months)+" "+days_si(duration.days)+" "+hours_si(duration.hours)+" "+minutes_si(duration.minutes)+" in "+seconds_si(duration.seconds);
   }
   
   function setIntervalAndExecute(fn, t) {
       fn();
       return(setInterval(fn, t));
   }
   