const pri_data = [
    {
      SiteName: "Proposed Plan 1",
      LATITUDE: -1.149367,
      LONGITUDE: 36.964791,
      Priority: 1,
      "Proposed Action": "Rooftop_ERRU",
      Sum_of_Devices: 12241,
      "SUM of Customer Complaints": 49,
      "3G_PS_Traffic(GB)": 42.524,
      "DLLoad(%)": 73.3141,
      VS_AMR_Erlang_BestCell: 2121.1,
      "VS_MaxTCP(dBm)": 45.8677,
      "VS_MeanRTWP(dBm)": -78.198,
      MeanRTWP: 61.802,
      "4G_PS_traffic_Volume(GB)": 491.4553,
      "DL_PRB_Usage_Rate(%)": 98.8375,
      PS_Traffic: 533.9793,
      Weighted_Value: 100,
    },
        {
          SiteName: "Proposed Plan 2",
          LATITUDE: -1.159298,
          LONGITUDE: 36.957493,
          Priority: 2,
          "Proposed Action": "2AAUs",
          Sum_of_Devices: 10090,
          "SUM of Customer Complaints": 33,
          "3G_PS_Traffic(GB)": 42.2619,
          "DLLoad(%)": 96.1018,
          "VS_AMR_Erlang_BestCell": 1845.5495,
          "VS_MaxTCP(dBm)": 45.9564,
          "VS_MeanRTWP(dBm)": -84.4474,
          MeanRTWP: 55.5526,
          "4G_PS_traffic_Volume(GB)": 326.4041,
          "DL_PRB_Usage_Rate(%)": 96.5378,
          PS_Traffic: 368.666,
          Weighted_Value: 79.20902442,
        },
        {
          SiteName: "Proposed Plan 3",
          LATITUDE: -1.17601,
          LONGITUDE: 36.83452,
          Priority: 3,
          "Proposed Action": "IBS",
          Sum_of_Devices: 8467,
          "SUM of Customer Complaints": 40,
          "3G_PS_Traffic(GB)": 43.2566,
          "DLLoad(%)": 90.5214,
          "VS_AMR_Erlang_BestCell": 1561.9837,
          "VS_MaxTCP(dBm)": 45.9564,
          "VS_MeanRTWP(dBm)": -83.0362,
          MeanRTWP: 56.9638,
          "4G_PS_traffic_Volume(GB)": 360.5955,
          "DL_PRB_Usage_Rate(%)": 91.3715,
          PS_Traffic: 403.8521,
          Weighted_Value: 76.59667591,
        },
            {
              SiteName: "Proposed Plan 4",
              LATITUDE: -1.244671,
              LONGITUDE: 36.660354,
              Priority: 4,
              "Proposed Action": "2AAUs",
              Sum_of_Devices: 10048,
              "SUM of Customer Complaints": 65,
              "3G_PS_Traffic(GB)": 42.4184,
              "DLLoad(%)": 69.622,
              "VS_AMR_Erlang_BestCell": 1607.3666,
              "VS_MaxTCP(dBm)": 45.7313,
              "VS_MeanRTWP(dBm)": -97.0356,
              MeanRTWP: 42.9644,
              "4G_PS_traffic_Volume(GB)": 437.0769,
              "DL_PRB_Usage_Rate(%)": 95.0161,
              PS_Traffic: 479.4953,
              Weighted_Value: 75.34293027,
            },
            // Row 2
            {
              SiteName: "Proposed Plan 5",
              LATITUDE: -1.26328,
              LONGITUDE: 36.71943,
              Priority: 5,
              "Proposed Action": "Rooftop",
              Sum_of_Devices: 10105,
              "SUM of Customer Complaints": 74,
              "3G_PS_Traffic(GB)": 53.6415,
              "DLLoad(%)": 79.5899,
              "VS_AMR_Erlang_BestCell": 1249.5004,
              "VS_MaxTCP(dBm)": 45.7772,
              "VS_MeanRTWP(dBm)": -97.1424,
              MeanRTWP: 42.8576,
              "4G_PS_traffic_Volume(GB)": 385.8477,
              "DL_PRB_Usage_Rate(%)": 92.577,
              PS_Traffic: 439.4892,
              Weighted_Value: 70.0452787,
            },
            // Row 3
            {
              SiteName: "Proposed Plan 6",
              LATITUDE: -1.191552,
              LONGITUDE: 36.784499,
              Priority: 6,
              "Proposed Action": "Rooftop",
              Sum_of_Devices: 11357,
              "SUM of Customer Complaints": 20,
              "3G_PS_Traffic(GB)": 64.1699,
              "DLLoad(%)": 78.7054,
              "VS_AMR_Erlang_BestCell": 946.2336,
              "VS_MaxTCP(dBm)": 45.8227,
              "VS_MeanRTWP(dBm)": -83.6435,
              MeanRTWP: 56.3565,
              "4G_PS_traffic_Volume(GB)": 392.9053,
              "DL_PRB_Usage_Rate(%)": 77.536,
              PS_Traffic: 457.0752,
              Weighted_Value: 68.99584644,
            },
            // Continue filling in rows 4 to 20 in a similar manner...
            {
              SiteName: "Proposed Plan 7",
              LATITUDE: -1.230402,
              LONGITUDE: 36.925264,
              Priority: 7,
              "Proposed Action": "Rooftop 1 Sector",
              Sum_of_Devices: 11990,
              "SUM of Customer Complaints": 24,
              "3G_PS_Traffic(GB)": 29.8303,
              "DLLoad(%)": 76.3796,
              "VS_AMR_Erlang_BestCell": 904.0833,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -82.7713,
              MeanRTWP: 57.2287,
              "4G_PS_traffic_Volume(GB)": 322.4532,
              "DL_PRB_Usage_Rate(%)": 98.073,
              PS_Traffic: 352.2835,
              Weighted_Value: 66.83404083,
            },
            {
              SiteName: "Proposed Plan 8",
              LATITUDE: -1.305622222,
              LONGITUDE: 36.77164167,
              Priority: 8,
              "Proposed Action": "Lampsite Upgrade",
              Sum_of_Devices: 4868,
              "SUM of Customer Complaints": 40,
              "3G_PS_Traffic(GB)": 29.4852,
              "DLLoad(%)": 85.239,
              "VS_AMR_Erlang_BestCell": 1010.3336,
              "VS_MaxTCP(dBm)": 45.7772,
              "VS_MeanRTWP(dBm)": -79.1291,
              MeanRTWP: 60.8709,
              "4G_PS_traffic_Volume(GB)": 314.1328,
              "DL_PRB_Usage_Rate(%)": 96.7674,
              PS_Traffic: 343.618,
              Weighted_Value: 64.9047655,
            },
            {
              SiteName: "Proposed Plan 9",
              LATITUDE: -1.176458,
              LONGITUDE: 36.981484,
              Priority: 9,
              "Proposed Action": "Rooftop_ERRU",
              Sum_of_Devices: 8739,
              "SUM of Customer Complaints": 11,
              "3G_PS_Traffic(GB)": 11.3896,
              "DLLoad(%)": 68.791,
              "VS_AMR_Erlang_BestCell": 956.8668,
              "VS_MaxTCP(dBm)": 45.7313,
              "VS_MeanRTWP(dBm)": -69.2747,
              MeanRTWP: 70.7253,
              "4G_PS_traffic_Volume(GB)": 212.0094,
              "DL_PRB_Usage_Rate(%)": 97.8346,
              PS_Traffic: 223.399,
              Weighted_Value: 64.41376541,
            },
            {
              SiteName: "Proposed Plan 10",
              LATITUDE: -1.311765,
              LONGITUDE: 36.8022,
              Priority: 10,
              "Proposed Action": "Rooftop_ERRU",
              Sum_of_Devices: 11657,
              "SUM of Customer Complaints": 11,
              "3G_PS_Traffic(GB)": 50.3685,
              "DLLoad(%)": 83.9339,
              "VS_AMR_Erlang_BestCell": 1023.5,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -86.4508,
              MeanRTWP: 53.5492,
              "4G_PS_traffic_Volume(GB)": 291.3115,
              "DL_PRB_Usage_Rate(%)": 96.4577,
              PS_Traffic: 341.68,
              Weighted_Value: 63.17996982,
            },
            {
              SiteName: "Proposed Plan 11",
              LATITUDE: -1.170946,
              LONGITUDE: 36.990738,
              Priority: 11,
              "Proposed Action": "Rooftop_ERRU",
              Sum_of_Devices: 9109,
              "SUM of Customer Complaints": 13,
              "3G_PS_Traffic(GB)": 60.2223,
              "DLLoad(%)": 90.4573,
              "VS_AMR_Erlang_BestCell": 832.65,
              "VS_MaxTCP(dBm)": 45.7772,
              "VS_MeanRTWP(dBm)": -81.0698,
              MeanRTWP: 58.9302,
              "4G_PS_traffic_Volume(GB)": 282.4815,
              "DL_PRB_Usage_Rate(%)": 95.7279,
              PS_Traffic: 342.7038,
              Weighted_Value: 62.28473558,
            },
            {
              SiteName: "Proposed Plan 12",
              LATITUDE: -1.279972562,
              LONGITUDE: 36.84954523,
              Priority: 12,
              "Proposed Action": "AAU",
              Sum_of_Devices: 5650,
              "SUM of Customer Complaints": 1,
              "3G_PS_Traffic(GB)": 22.9851,
              "DLLoad(%)": 58.9433,
              "VS_AMR_Erlang_BestCell": 1414.1329,
              "VS_MaxTCP(dBm)": 45.7772,
              "VS_MeanRTWP(dBm)": -75.7708,
              MeanRTWP: 64.2292,
              "4G_PS_traffic_Volume(GB)": 249.6977,
              "DL_PRB_Usage_Rate(%)": 87.5179,
              PS_Traffic: 272.6828,
              Weighted_Value: 61.69660097,
            },
            {
              SiteName: "Proposed Plan 13",
              LATITUDE: -1.216836,
              LONGITUDE: 36.90018,
              Priority: 13,
              "Proposed Action": "BookRRU",
              Sum_of_Devices: 4726,
              "SUM of Customer Complaints": 85,
              "3G_PS_Traffic(GB)": 14.0122,
              "DLLoad(%)": 64.4052,
              "VS_AMR_Erlang_BestCell": 667.9498,
              "VS_MaxTCP(dBm)": 45.9123,
              "VS_MeanRTWP(dBm)": -78.0341,
              MeanRTWP: 61.9659,
              "4G_PS_traffic_Volume(GB)": 244.4644,
              "DL_PRB_Usage_Rate(%)": 91.9156,
              PS_Traffic: 258.4766,
              Weighted_Value: 61.10197429,
            },
            {
              SiteName: "Proposed Plan 14",
              LATITUDE: -1.281409,
              LONGITUDE: 36.735201,
              Priority: 14,
              "Proposed Action": "AAU",
              Sum_of_Devices: 8998,
              "SUM of Customer Complaints": 24,
              "3G_PS_Traffic(GB)": 44.4334,
              "DLLoad(%)": 89.824,
              "VS_AMR_Erlang_BestCell": 818.5496,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -89.5991,
              MeanRTWP: 50.4009,
              "4G_PS_traffic_Volume(GB)": 351.9423,
              "DL_PRB_Usage_Rate(%)": 95.8986,
              PS_Traffic: 396.3757,
              Weighted_Value: 60.15326182,
            },
            {
              SiteName: "Proposed Plan 15",
              LATITUDE: -1.274102778,
              LONGITUDE: 36.84356944,
              Priority: 15,
              "Proposed Action": "AAU",
              Sum_of_Devices: 6749,
              "SUM of Customer Complaints": 3,
              "3G_PS_Traffic(GB)": 5.9211,
              "DLLoad(%)": 43.2302,
              "VS_AMR_Erlang_BestCell": 883.4167,
              "VS_MaxTCP(dBm)": 45.7313,
              "VS_MeanRTWP(dBm)": -77.6179,
              MeanRTWP: 62.3821,
              "4G_PS_traffic_Volume(GB)": 357.5389,
              "DL_PRB_Usage_Rate(%)": 99.2074,
              PS_Traffic: 363.46,
              Weighted_Value: 59.98189709,
            },
            {
              SiteName: "Proposed Plan 16",
              LATITUDE: -1.282666,
              LONGITUDE: 36.828358,
              Priority: 16,
              "Proposed Action": "2AAUs",
              Sum_of_Devices: 3509,
              "SUM of Customer Complaints": 5,
              "3G_PS_Traffic(GB)": 24.2311,
              "DLLoad(%)": 73.1114,
              "VS_AMR_Erlang_BestCell": 1142.0336,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -63.1919,
              MeanRTWP: 76.8081,
              "4G_PS_traffic_Volume(GB)": 142.129,
              "DL_PRB_Usage_Rate(%)": 79.7024,
              PS_Traffic: 166.3601,
              Weighted_Value: 59.79312412,
            },
            {
              SiteName: "Proposed Plan 17",
              LATITUDE: -1.283017,
              LONGITUDE: 36.828388,
              Priority: 17,
              "Proposed Action": "BookRRU",
              Sum_of_Devices: 3509,
              "SUM of Customer Complaints": 5,
              "3G_PS_Traffic(GB)": 24.2311,
              "DLLoad(%)": 73.1114,
              "VS_AMR_Erlang_BestCell": 1142.0336,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -63.1919,
              MeanRTWP: 76.8081,
              "4G_PS_traffic_Volume(GB)": 142.129,
              "DL_PRB_Usage_Rate(%)": 79.7024,
              PS_Traffic: 166.3601,
              Weighted_Value: 59.79312412,
            },
            {
              SiteName: "Proposed Plan 18",
              LATITUDE: -1.188862,
              LONGITUDE: 37.007336,
              Priority: 18,
              "Proposed Action": "Kplc pole_ERRU",
              Sum_of_Devices: 9308,
              "SUM of Customer Complaints": 12,
              "3G_PS_Traffic(GB)": 48.5553,
              "DLLoad(%)": 84.7961,
              "VS_AMR_Erlang_BestCell": 830.7003,
              "VS_MaxTCP(dBm)": 45.7313,
              "VS_MeanRTWP(dBm)": -86.5493,
              MeanRTWP: 53.4507,
              "4G_PS_traffic_Volume(GB)": 317.7388,
              "DL_PRB_Usage_Rate(%)": 91.4184,
              PS_Traffic: 366.2941,
              Weighted_Value: 58.73637648,
            },
            {
              SiteName: "Proposed Plan 19",
              LATITUDE: -1.17032,
              LONGITUDE: 36.96998,
              Priority: 19,
              "Proposed Action": "AAU",
              Sum_of_Devices: 4367,
              "SUM of Customer Complaints": 35,
              "3G_PS_Traffic(GB)": 24.8479,
              "DLLoad(%)": 61.8329,
              "VS_AMR_Erlang_BestCell": 1182.9335,
              "VS_MaxTCP(dBm)": 45.7772,
              "VS_MeanRTWP(dBm)": -87.2557,
              MeanRTWP: 52.7443,
              "4G_PS_traffic_Volume(GB)": 282.0298,
              "DL_PRB_Usage_Rate(%)": 90.8192,
              PS_Traffic: 306.8777,
              Weighted_Value: 55.87464627,
            },
            {
              SiteName: "Proposed Plan 20",
              LATITUDE: -1.28334,
              LONGITUDE: 36.821174,
              Priority: 20,
              "Proposed Action": "2AAUs",
              Sum_of_Devices: 3796,
              "SUM of Customer Complaints": 9,
              "3G_PS_Traffic(GB)": 26.6766,
              "DLLoad(%)": 63.6935,
              "VS_AMR_Erlang_BestCell": 1006.1667,
              "VS_MaxTCP(dBm)": 45.8677,
              "VS_MeanRTWP(dBm)": -80.9384,
              MeanRTWP: 59.0616,
              "4G_PS_traffic_Volume(GB)": 179.3931,
              "DL_PRB_Usage_Rate(%)": 82.0331,
              PS_Traffic: 201.0697,
              Weighted_Value: 55.55551106,
            }         
  ];
  
  export default pri_data;
  