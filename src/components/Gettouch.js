export const Gettouch = (props) => {
    return (
        <div className="bg-white flex flex-col px-4 py-16 gap-6 sm:px-20 sm:py-24 sm:gap-12 items-center">
            <div className="flex flex-col grow items-center gap-4 items-center">
                <div className="w-fit px-5 py-1 bg-gray-200 rounded-xl text-center text-gray-600">
                    <p className="text-sm font-medium">Get in touch</p>
                </div>
                <p className="text-xl font-normal text-gray-600 text-center" >What’s next? Feel free to reach out to me if you're looking for <br /> a developer, have a query, or simply want to connect.</p>
            </div>
            <div className="flex flex-col gap-4 text-lg sm:text-4xl font-semibold text-gray-900 items-center">
                <div className="flex gap-5 items-center">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6667 5.3335H5.33341C3.86066 5.3335 2.66675 6.5274 2.66675 8.00016V24.0002C2.66675 25.4729 3.86066 26.6668 5.33341 26.6668H26.6667C28.1395 26.6668 29.3334 25.4729 29.3334 24.0002V8.00016C29.3334 6.5274 28.1395 5.3335 26.6667 5.3335Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M29.3334 9.3335L17.3734 16.9335C16.9618 17.1914 16.4858 17.3282 16.0001 17.3282C15.5143 17.3282 15.0384 17.1914 14.6267 16.9335L2.66675 9.3335" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1>{props.gmail}</h1>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="flex gap-5 items-center">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.3334 21.56V25.56C28.3349 25.9313 28.2589 26.2989 28.1101 26.6391C27.9613 26.9793 27.7431 27.2848 27.4695 27.5358C27.1959 27.7868 26.8728 27.9779 26.5211 28.0969C26.1693 28.2159 25.7966 28.2601 25.4267 28.2266C21.3239 27.7808 17.3827 26.3788 13.9201 24.1333C10.6985 22.0862 7.96719 19.3549 5.92007 16.1333C3.66671 12.6549 2.2644 8.69463 1.82674 4.5733C1.79342 4.20459 1.83724 3.83298 1.95541 3.48213C2.07357 3.13128 2.2635 2.80889 2.51309 2.53546C2.76269 2.26204 3.06648 2.04358 3.40513 1.894C3.74378 1.74441 4.10986 1.66698 4.48007 1.66663H8.48007C9.12715 1.66026 9.75446 1.8894 10.2451 2.31134C10.7357 2.73328 11.0562 3.31923 11.1467 3.95997C11.3156 5.24006 11.6287 6.49694 12.0801 7.70663C12.2595 8.18387 12.2983 8.70252 12.1919 9.20114C12.0856 9.69976 11.8386 10.1574 11.4801 10.52L9.78674 12.2133C11.6848 15.5514 14.4487 18.3152 17.7867 20.2133L19.4801 18.52C19.8426 18.1615 20.3003 17.9144 20.7989 17.8081C21.2975 17.7018 21.8162 17.7406 22.2934 17.92C23.5031 18.3714 24.76 18.6845 26.0401 18.8533C26.6878 18.9447 27.2793 19.2709 27.7021 19.77C28.125 20.269 28.3496 20.9061 28.3334 21.56Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <h1>{props.phone}</h1>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.6667 10.6665H13.3334C11.8607 10.6665 10.6667 11.8604 10.6667 13.3332V26.6665C10.6667 28.1393 11.8607 29.3332 13.3334 29.3332H26.6667C28.1395 29.3332 29.3334 28.1393 29.3334 26.6665V13.3332C29.3334 11.8604 28.1395 10.6665 26.6667 10.6665Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.33341 21.3332C3.86675 21.3332 2.66675 20.1332 2.66675 18.6665V5.33317C2.66675 3.8665 3.86675 2.6665 5.33341 2.6665H18.6667C20.1334 2.6665 21.3334 3.8665 21.3334 5.33317" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>

            </div>
            <div className="flex flex-col gap-2 font-normal text-xl items-center ">
                <p>You may also find me on these platforms!</p>
                <div className="flex gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 22V18C15.1392 16.7473 14.78 15.4901 14 14.5C17 14.5 20 12.5 20 9C20.08 7.75 19.73 6.52 19 5.5C19.28 4.35 19.28 3.15 19 2C19 2 18 2 16 3.5C13.36 3 10.64 3 8.00004 3.5C6.00004 2 5.00004 2 5.00004 2C4.70004 3.15 4.70004 4.35 5.00004 5.5C4.27191 6.51588 3.91851 7.75279 4.00004 9C4.00004 12.5 7.00004 14.5 10 14.5C9.61004 14.99 9.32004 15.55 9.15004 16.15C8.98004 16.75 8.93004 17.38 9.00004 18V22" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M9 18C4.49 20 4 16 2 16" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 1C21 1 20.3 3.1 19 4.4C20.6 14.4 9.6 21.7 1 16C3.2 16.1 5.4 15.4 7 14C2 12.5 -0.5 6.6 2 2C4.2 4.6 7.6 6.1 11 6C10.1 1.8 15 -0.6 18 2.2C19.1 2.2 21 1 21 1Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 5.5C5 4.57174 5.36875 3.6815 6.02513 3.02513C6.6815 2.36875 7.57174 2 8.5 2H12V9H8.5C7.57174 9 6.6815 8.63125 6.02513 7.97487C5.36875 7.3185 5 6.42826 5 5.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 2H15.5C15.9596 2 16.4148 2.09053 16.8394 2.26642C17.264 2.44231 17.6499 2.70012 17.9749 3.02513C18.2999 3.35013 18.5577 3.73597 18.7336 4.16061C18.9095 4.58525 19 5.04037 19 5.5C19 5.95963 18.9095 6.41475 18.7336 6.83939C18.5577 7.26403 18.2999 7.64987 17.9749 7.97487C17.6499 8.29988 17.264 8.55769 16.8394 8.73358C16.4148 8.90947 15.9596 9 15.5 9H12V2Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M12 12.5C12 12.0404 12.0905 11.5852 12.2664 11.1606C12.4423 10.736 12.7001 10.3501 13.0251 10.0251C13.3501 9.70012 13.736 9.44231 14.1606 9.26642C14.5852 9.09053 15.0404 9 15.5 9C15.9596 9 16.4148 9.09053 16.8394 9.26642C17.264 9.44231 17.6499 9.70012 17.9749 10.0251C18.2999 10.3501 18.5577 10.736 18.7336 11.1606C18.9095 11.5852 19 12.0404 19 12.5C19 12.9596 18.9095 13.4148 18.7336 13.8394C18.5577 14.264 18.2999 14.6499 17.9749 14.9749C17.6499 15.2999 17.264 15.5577 16.8394 15.7336C16.4148 15.9095 15.9596 16 15.5 16C15.0404 16 14.5852 15.9095 14.1606 15.7336C13.736 15.5577 13.3501 15.2999 13.0251 14.9749C12.7001 14.6499 12.4423 14.264 12.2664 13.8394C12.0905 13.4148 12 12.9596 12 12.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 19.5C5 18.5717 5.36875 17.6815 6.02513 17.0251C6.6815 16.3687 7.57174 16 8.5 16H12V19.5C12 20.4283 11.6313 21.3185 10.9749 21.9749C10.3185 22.6313 9.42826 23 8.5 23C7.57174 23 6.6815 22.6313 6.02513 21.9749C5.36875 21.3185 5 20.4283 5 19.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5 12.5C5 11.5717 5.36875 10.6815 6.02513 10.0251C6.6815 9.36875 7.57174 9 8.5 9H12V16H8.5C7.57174 16 6.6815 15.6313 6.02513 14.9749C5.36875 14.3185 5 13.4283 5 12.5Z" stroke="#4B5563" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </div>

            </div>


        </div>
    )
}