﻿using System.Reflection.Metadata.Ecma335;

namespace BucParking.Models
{
    public class ParkingSpot
    {
        public string ParkingLotId { get; set; } = string.Empty;
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public ParkingType Type { get; set; }

        public static ParkingSpot SpotsFromCsv(string csvLine)
        {
            String[] values = csvLine.Split(',');
            ParkingSpot parkingSpotsData = new ParkingSpot();
            parkingSpotsData.ParkingLotId = (values[5]);
            parkingSpotsData.Latitude = double.Parse(values[1]);
            parkingSpotsData.Longitude = double.Parse(values[0]);
            parkingSpotsData.Type = Enum.Parse<ParkingType>(values[6], true);

            return parkingSpotsData;
        }
    }
}
