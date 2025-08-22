using System.Net.Http;
using System.Net.Http.Json;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using System.Text.Json.Nodes;
using Microsoft.JSInterop;

public class RouteRequest
{
    public List<List<double>> coordinates { get; set; }
}

public class OpenRouteService
{
    private readonly HttpClient _http;
    private readonly string _apiKey = "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6ImM3NzdiYTZiYzI2NTQ5MGFhNzIwOGMwZmUyNjVmNTZjIiwiaCI6Im11cm11cjY0In0=";

    public OpenRouteService(HttpClient http)
    {
        _http = http;
    }

    public async Task<string> GetRouteAsync(double startLon, double startLat, double endLon, double endLat)
    {
        var request = new RouteRequest
        {
            coordinates = new List<List<double>> {
                new List<double> { startLon, startLat },
                new List<double> { endLon, endLat }
            }
        };

        var json = JsonSerializer.Serialize(request);
        var content = new StringContent(json, Encoding.UTF8, "application/json");

        var response = await _http.PostAsync(
            $"https://api.openrouteservice.org/v2/directions/driving-car?api_key={_apiKey}", content);

        // var response = await _http.PostAsync(
        //     $"https://api.openrouteservice.org/v2/directions/driving-car?api_key={_apiKey}&geometry_format=geojson", content);

        return await response.Content.ReadAsStringAsync();
    }
}
