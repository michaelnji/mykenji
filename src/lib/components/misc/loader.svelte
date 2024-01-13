<span class="loader"></span>

<style>
    .loader {
          width: 48px;
          height: 48px;
          display: flex;
          animation : rotate 2s linear infinite;
        }
        .loader:before,
        .loader:after {
          content:"";
          flex:1;
         @apply bg-secondary;
          animation: mvx 0.5s infinite linear alternate;
        }
        .loader:before {
          @apply bg-primary;
          animation-name:mvrx;
        }

        @keyframes rotate {
          100% {transform: rotate(360deg)}
        }
        @keyframes mvx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(8px)}
          100% {transform: translateX(15px)}
        }
        @keyframes mvrx {
          0% , 40% {transform: translateX(0px)}
          20% , 60% {transform: translateX(-8px)}
          100% {transform: translateX(-15px)}
        }

    
</style>