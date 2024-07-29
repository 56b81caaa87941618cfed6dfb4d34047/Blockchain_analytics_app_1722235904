/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722235946", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <div class="grid">
                <div id="sidebar" class="flex-1 bg-gray-900 dark:bg-gray-950 h-screen p-5">
                    <nav>
                        <ul class="space-y-4">
                            <li><a href="#" class="flex items-center text-white hover:text-purple-400"><i class='bx bx-home mr-2'></i> Home</a></li>
                            <li><a href="#" class="flex items-center text-white hover:text-purple-400"><i class='bx bx-info-circle mr-2'></i> About</a></li>
                            <li><a href="#" class="flex items-center text-white hover:text-purple-400"><i class='bx bx-link mr-2'></i> Integrations</a></li>
                        </ul>
                    </nav>
                </div>
                <section id="blank-section" class="bg-gray-800 dark:bg-gray-900 flex-1">
                    <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">

                        <button class="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out">
                            Hello World
                        </button>

                    </div>
                </section>  
            </div>          
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
