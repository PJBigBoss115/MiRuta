using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;

namespace MiRuta.Pages
{
    public partial class News
    {
        [Inject]
        private IJSRuntime JSRuntime { get; set; } = null!;

        protected override async Task OnAfterRenderAsync(bool firstRender)
        {
            if (firstRender)
            {
                await JSRuntime.InvokeVoidAsync("initializeNewsFilters");
            }
        }
    }
}