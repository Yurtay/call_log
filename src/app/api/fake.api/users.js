const users = [
  { id: "33100", name: "Абонент 100", filial: "buavr" },
  { id: "33101", name: "Абонент 101", filial: "buavr" },
  { id: "33102", name: "Абонент 102", filial: "buavr" },
  { id: "33103", name: "Абонент 103", filial: "buavr" },
  { id: "33104", name: "Абонент 104", filial: "buavr" },
  { id: "33105", name: "Абонент 105", filial: "buavr" },
  { id: "33106", name: "Абонент 106", filial: "buavr" },
  { id: "33107", name: "Абонент 107", filial: "buavr" },
  { id: "33108", name: "Абонент 108", filial: "buavr" },
  { id: "33109", name: "Абонент 109", filial: "buavr" },
  { id: "33110", name: "Абонент 110", filial: "buavr" },
  { id: "33111", name: "Абонент 111", filial: "buavr" },
  { id: "33112", name: "Абонент 112", filial: "buavr" },
  { id: "33113", name: "Абонент 113", filial: "buavr" },
  { id: "33114", name: "Абонент 114", filial: "buavr" },
  { id: "33115", name: "Абонент 115", filial: "buavr" },
  { id: "33116", name: "Абонент 116", filial: "buavr" },
  { id: "33117", name: "Абонент 117", filial: "buavr" },
  { id: "33118", name: "Абонент 118", filial: "buavr" },
  { id: "33119", name: "Абонент 119", filial: "buavr" },
  { id: "33120", name: "Абонент 120", filial: "buavr" },
  { id: "33121", name: "Абонент 121", filial: "buavr" },
  { id: "33122", name: "Абонент 122", filial: "buavr" },
  { id: "33123", name: "Абонент 123", filial: "buavr" },
  { id: "33124", name: "Абонент 124", filial: "buavr" },
  { id: "33125", name: "Абонент 125", filial: "buavr" },
  { id: "33126", name: "Абонент 126", filial: "buavr" },
  { id: "33127", name: "Абонент 127", filial: "buavr" },
  { id: "33128", name: "Абонент 128", filial: "buavr" },
  { id: "33129", name: "Абонент 129", filial: "buavr" },
  { id: "33130", name: "Абонент 130", filial: "buavr" },
  { id: "33131", name: "Абонент 131", filial: "buavr" },
  { id: "33132", name: "Абонент 132", filial: "buavr" },
  { id: "33133", name: "Абонент 133", filial: "buavr" },
  { id: "33134", name: "Абонент 134", filial: "buavr" },
  { id: "33135", name: "Абонент 135", filial: "buavr" },
  { id: "33136", name: "Абонент 136", filial: "buavr" },
  { id: "33137", name: "Абонент 137", filial: "buavr" },
  { id: "33138", name: "Абонент 138", filial: "buavr" },
  { id: "33139", name: "Абонент 139", filial: "buavr" },
  { id: "33140", name: "Абонент 140", filial: "buavr" },
  { id: "33141", name: "Абонент 141", filial: "buavr" },
  { id: "33142", name: "Абонент 142", filial: "buavr" },
  { id: "33143", name: "Абонент 143", filial: "buavr" },
  { id: "33144", name: "Абонент 144", filial: "buavr" },
  { id: "33145", name: "Абонент 145", filial: "buavr" },
  { id: "33146", name: "Абонент 146", filial: "buavr" },
  { id: "33147", name: "Абонент 147", filial: "buavr" },
  { id: "33148", name: "Абонент 148", filial: "buavr" },
  { id: "33149", name: "Абонент 149", filial: "buavr" },
  { id: "33150", name: "Абонент 150", filial: "buavr" },
  { id: "33151", name: "Абонент 151", filial: "buavr" },
  { id: "33152", name: "Абонент 152", filial: "buavr" },
  { id: "33153", name: "Абонент 153", filial: "buavr" },
  { id: "33154", name: "Абонент 154", filial: "buavr" },
  { id: "33155", name: "Абонент 155", filial: "buavr" },
  { id: "33156", name: "Абонент 156", filial: "buavr" },
  { id: "33157", name: "Абонент 157", filial: "buavr" },
  { id: "33158", name: "Абонент 158", filial: "buavr" },
  { id: "33159", name: "Абонент 159", filial: "buavr" },
  { id: "33160", name: "Абонент 160", filial: "buavr" },
  { id: "33161", name: "Абонент 161", filial: "buavr" },
  { id: "33162", name: "Абонент 162", filial: "buavr" },
  { id: "33163", name: "Абонент 163", filial: "buavr" },
  { id: "33164", name: "Абонент 164", filial: "buavr" },
  { id: "33165", name: "Абонент 165", filial: "buavr" },
  { id: "33166", name: "Абонент 166", filial: "buavr" },
  { id: "33167", name: "Абонент 167", filial: "buavr" },
  { id: "33168", name: "Абонент 168", filial: "buavr" },
  { id: "33169", name: "Абонент 169", filial: "buavr" },
  { id: "33170", name: "Абонент 170", filial: "buavr" },
  { id: "33171", name: "Абонент 171", filial: "buavr" },
  { id: "33172", name: "Абонент 172", filial: "buavr" },
  { id: "33173", name: "Абонент 173", filial: "buavr" },
  { id: "33174", name: "Абонент 174", filial: "buavr" },
  { id: "33175", name: "Абонент 175", filial: "buavr" },
  { id: "33176", name: "Абонент 176", filial: "buavr" },
  { id: "33177", name: "Абонент 177", filial: "buavr" },
  { id: "33178", name: "Абонент 178", filial: "buavr" },
  { id: "33179", name: "Абонент 179", filial: "buavr" },
  { id: "33180", name: "Абонент 180", filial: "buavr" },
  { id: "33181", name: "Абонент 181", filial: "buavr" },
  { id: "33182", name: "Абонент 182", filial: "buavr" },
  { id: "33183", name: "Абонент 183", filial: "buavr" },
  { id: "33184", name: "Абонент 184", filial: "buavr" },
  { id: "33185", name: "Абонент 185", filial: "buavr" },
  { id: "33186", name: "Абонент 186", filial: "buavr" },
  { id: "33187", name: "Абонент 187", filial: "buavr" },
  { id: "33188", name: "Абонент 188", filial: "buavr" },
  { id: "33189", name: "Абонент 189", filial: "buavr" },
  { id: "33190", name: "Абонент 190", filial: "buavr" },
  { id: "33191", name: "Абонент 191", filial: "buavr" },
  { id: "33192", name: "Абонент 192", filial: "buavr" },
  { id: "33193", name: "Абонент 193", filial: "buavr" },
  { id: "33194", name: "Абонент 194", filial: "buavr" },
  { id: "33195", name: "Абонент 195", filial: "buavr" },
  { id: "33196", name: "Абонент 196", filial: "buavr" },
  { id: "33197", name: "Абонент 197", filial: "buavr" },
  { id: "33198", name: "Абонент 198", filial: "buavr" },
  { id: "33199", name: "Абонент 199", filial: "buavr" },
  { id: "33200", name: "Абонент 200", filial: "kuphg" },
  { id: "33201", name: "Абонент 201", filial: "kuphg" },
  { id: "33202", name: "Абонент 202", filial: "kuphg" },
  { id: "33203", name: "Абонент 203", filial: "kuphg" },
  { id: "33204", name: "Абонент 204", filial: "kuphg" },
  { id: "33205", name: "Абонент 205", filial: "kuphg" },
  { id: "33206", name: "Абонент 206", filial: "kuphg" },
  { id: "33207", name: "Абонент 207", filial: "kuphg" },
  { id: "33208", name: "Абонент 208", filial: "kuphg" },
  { id: "33209", name: "Абонент 209", filial: "kuphg" },
  { id: "33210", name: "Абонент 210", filial: "kuphg" },
  { id: "33211", name: "Абонент 211", filial: "kuphg" },
  { id: "33212", name: "Абонент 212", filial: "kuphg" },
  { id: "33213", name: "Абонент 213", filial: "kuphg" },
  { id: "33214", name: "Абонент 214", filial: "kuphg" },
  { id: "33215", name: "Абонент 215", filial: "kuphg" },
  { id: "33216", name: "Абонент 216", filial: "kuphg" },
  { id: "33217", name: "Абонент 217", filial: "kuphg" },
  { id: "33218", name: "Абонент 218", filial: "kuphg" },
  { id: "33219", name: "Абонент 219", filial: "kuphg" },
  { id: "33220", name: "Абонент 220", filial: "kuphg" },
  { id: "33221", name: "Абонент 221", filial: "kuphg" },
  { id: "33222", name: "Абонент 222", filial: "kuphg" },
  { id: "33223", name: "Абонент 223", filial: "kuphg" },
  { id: "33224", name: "Абонент 224", filial: "kuphg" },
  { id: "33225", name: "Абонент 225", filial: "kuphg" },
  { id: "33226", name: "Абонент 226", filial: "kuphg" },
  { id: "33227", name: "Абонент 227", filial: "kuphg" },
  { id: "33228", name: "Абонент 228", filial: "kuphg" },
  { id: "33229", name: "Абонент 229", filial: "kuphg" },
  { id: "33230", name: "Абонент 230", filial: "kuphg" },
  { id: "33231", name: "Абонент 231", filial: "kuphg" },
  { id: "33232", name: "Абонент 232", filial: "kuphg" },
  { id: "33233", name: "Абонент 233", filial: "kuphg" },
  { id: "33234", name: "Абонент 234", filial: "kuphg" },
  { id: "33235", name: "Абонент 235", filial: "kuphg" },
  { id: "33236", name: "Абонент 236", filial: "kuphg" },
  { id: "33237", name: "Абонент 237", filial: "kuphg" },
  { id: "33238", name: "Абонент 238", filial: "kuphg" },
  { id: "33239", name: "Абонент 239", filial: "kuphg" },
  { id: "33240", name: "Абонент 240", filial: "kuphg" },
  { id: "33241", name: "Абонент 241", filial: "kuphg" },
  { id: "33242", name: "Абонент 242", filial: "kuphg" },
  { id: "33243", name: "Абонент 243", filial: "kuphg" },
  { id: "33244", name: "Абонент 244", filial: "kuphg" },
  { id: "33245", name: "Абонент 245", filial: "kuphg" },
  { id: "33246", name: "Абонент 246", filial: "kuphg" },
  { id: "33247", name: "Абонент 247", filial: "kuphg" },
  { id: "33248", name: "Абонент 248", filial: "kuphg" },
  { id: "33249", name: "Абонент 249", filial: "kuphg" },
  { id: "33250", name: "Абонент 250", filial: "kuphg" },
  { id: "33251", name: "Абонент 251", filial: "kuphg" },
  { id: "33252", name: "Абонент 252", filial: "kuphg" },
  { id: "33253", name: "Абонент 253", filial: "kuphg" },
  { id: "33254", name: "Абонент 254", filial: "kuphg" },
  { id: "33255", name: "Абонент 255", filial: "kuphg" },
  { id: "33256", name: "Абонент 256", filial: "kuphg" },
  { id: "33257", name: "Абонент 257", filial: "kuphg" },
  { id: "33258", name: "Абонент 258", filial: "kuphg" },
  { id: "33259", name: "Абонент 259", filial: "kuphg" },
  { id: "33260", name: "Абонент 260", filial: "kuphg" },
  { id: "33261", name: "Абонент 261", filial: "kuphg" },
  { id: "33262", name: "Абонент 262", filial: "kuphg" },
  { id: "33263", name: "Абонент 263", filial: "kuphg" },
  { id: "33264", name: "Абонент 264", filial: "kuphg" },
  { id: "33265", name: "Абонент 265", filial: "kuphg" },
  { id: "33266", name: "Абонент 266", filial: "kuphg" },
  { id: "33267", name: "Абонент 267", filial: "kuphg" },
  { id: "33268", name: "Абонент 268", filial: "kuphg" },
  { id: "33269", name: "Абонент 269", filial: "kuphg" },
  { id: "33270", name: "Абонент 270", filial: "kuphg" },
  { id: "33271", name: "Абонент 271", filial: "kuphg" },
  { id: "33272", name: "Абонент 272", filial: "kuphg" },
  { id: "33273", name: "Абонент 273", filial: "kuphg" },
  { id: "33274", name: "Абонент 274", filial: "kuphg" },
  { id: "33275", name: "Абонент 275", filial: "kuphg" },
  { id: "33276", name: "Абонент 276", filial: "kuphg" },
  { id: "33277", name: "Абонент 277", filial: "kuphg" },
  { id: "33278", name: "Абонент 278", filial: "kuphg" },
  { id: "33279", name: "Абонент 279", filial: "kuphg" },
  { id: "33280", name: "Абонент 280", filial: "kuphg" },
  { id: "33281", name: "Абонент 281", filial: "kuphg" },
  { id: "33282", name: "Абонент 282", filial: "kuphg" },
  { id: "33283", name: "Абонент 283", filial: "kuphg" },
  { id: "33284", name: "Абонент 284", filial: "kuphg" },
  { id: "33285", name: "Абонент 285", filial: "kuphg" },
  { id: "33286", name: "Абонент 286", filial: "kuphg" },
  { id: "33287", name: "Абонент 287", filial: "kuphg" },
  { id: "33288", name: "Абонент 288", filial: "kuphg" },
  { id: "33289", name: "Абонент 289", filial: "kuphg" },
  { id: "33290", name: "Абонент 290", filial: "kuphg" },
  { id: "33291", name: "Абонент 291", filial: "kuphg" },
  { id: "33292", name: "Абонент 292", filial: "kuphg" },
  { id: "33293", name: "Абонент 293", filial: "kuphg" },
  { id: "33294", name: "Абонент 294", filial: "kuphg" },
  { id: "33295", name: "Абонент 295", filial: "kuphg" },
  { id: "33296", name: "Абонент 296", filial: "kuphg" },
  { id: "33297", name: "Абонент 297", filial: "kuphg" },
  { id: "33298", name: "Абонент 298", filial: "kuphg" },
  { id: "33299", name: "Абонент 299", filial: "kuphg" },
  { id: "33300", name: "Абонент 300", filial: "kuphg" },
  { id: "33301", name: "Абонент 301", filial: "kuphg" },
  { id: "33302", name: "Абонент 302", filial: "kuphg" },
  { id: "33303", name: "Абонент 303", filial: "kuphg" },
  { id: "33304", name: "Абонент 304", filial: "kuphg" },
  { id: "33305", name: "Абонент 305", filial: "kuphg" },
  { id: "33306", name: "Абонент 306", filial: "kuphg" },
  { id: "33307", name: "Абонент 307", filial: "kuphg" },
  { id: "33308", name: "Абонент 308", filial: "kuphg" },
  { id: "33309", name: "Абонент 309", filial: "kuphg" },
  { id: "33310", name: "Абонент 310", filial: "kuphg" },
  { id: "33311", name: "Абонент 311", filial: "kuphg" },
  { id: "33312", name: "Абонент 312", filial: "kuphg" },
  { id: "33313", name: "Абонент 313", filial: "kuphg" },
  { id: "33314", name: "Абонент 314", filial: "kuphg" },
  { id: "33315", name: "Абонент 315", filial: "kuphg" },
  { id: "33316", name: "Абонент 316", filial: "kuphg" },
  { id: "33317", name: "Абонент 317", filial: "kuphg" },
  { id: "33318", name: "Абонент 318", filial: "kuphg" },
  { id: "33319", name: "Абонент 319", filial: "kuphg" },
  { id: "33320", name: "Абонент 320", filial: "kuphg" },
  { id: "33321", name: "Абонент 321", filial: "kuphg" },
  { id: "33322", name: "Абонент 322", filial: "kuphg" },
  { id: "33323", name: "Абонент 323", filial: "kuphg" },
  { id: "33324", name: "Абонент 324", filial: "kuphg" },
  { id: "33325", name: "Абонент 325", filial: "kuphg" },
  { id: "33326", name: "Абонент 326", filial: "kuphg" },
  { id: "33327", name: "Абонент 327", filial: "kuphg" },
  { id: "33328", name: "Абонент 328", filial: "kuphg" },
  { id: "33329", name: "Абонент 329", filial: "kuphg" },
  { id: "33330", name: "Абонент 330", filial: "kuphg" },
  { id: "33331", name: "Абонент 331", filial: "kuphg" },
  { id: "33332", name: "Абонент 332", filial: "kuphg" },
  { id: "33333", name: "Абонент 333", filial: "kuphg" },
  { id: "33334", name: "Абонент 334", filial: "kuphg" },
  { id: "33335", name: "Абонент 335", filial: "kuphg" },
  { id: "33336", name: "Абонент 336", filial: "kuphg" },
  { id: "33337", name: "Абонент 337", filial: "kuphg" },
  { id: "33338", name: "Абонент 338", filial: "kuphg" },
  { id: "33339", name: "Абонент 339", filial: "kuphg" },
  { id: "33340", name: "Абонент 340", filial: "kuphg" },
  { id: "33341", name: "Абонент 341", filial: "kuphg" },
  { id: "33342", name: "Абонент 342", filial: "kuphg" },
  { id: "33343", name: "Абонент 343", filial: "kuphg" },
  { id: "33344", name: "Абонент 344", filial: "kuphg" },
  { id: "33345", name: "Абонент 345", filial: "kuphg" },
  { id: "33346", name: "Абонент 346", filial: "kuphg" },
  { id: "33347", name: "Абонент 347", filial: "kuphg" },
  { id: "33348", name: "Абонент 348", filial: "kuphg" },
  { id: "33349", name: "Абонент 349", filial: "kuphg" },
  { id: "33350", name: "Абонент 350", filial: "kuphg" },
  { id: "33351", name: "Абонент 351", filial: "kuphg" },
  { id: "33352", name: "Абонент 352", filial: "kuphg" },
  { id: "33353", name: "Абонент 353", filial: "kuphg" },
  { id: "33354", name: "Абонент 354", filial: "kuphg" },
  { id: "33355", name: "Абонент 355", filial: "kuphg" },
  { id: "33356", name: "Абонент 356", filial: "kuphg" },
  { id: "33357", name: "Абонент 357", filial: "kuphg" },
  { id: "33358", name: "Абонент 358", filial: "kuphg" },
  { id: "33359", name: "Абонент 359", filial: "kuphg" },
  { id: "33360", name: "Абонент 360", filial: "kuphg" },
  { id: "33361", name: "Абонент 361", filial: "kuphg" },
  { id: "33362", name: "Абонент 362", filial: "kuphg" },
  { id: "33363", name: "Абонент 363", filial: "kuphg" },
  { id: "33364", name: "Абонент 364", filial: "kuphg" },
  { id: "33365", name: "Абонент 365", filial: "kuphg" },
  { id: "33366", name: "Абонент 366", filial: "kuphg" },
  { id: "33367", name: "Абонент 367", filial: "kuphg" },
  { id: "33368", name: "Абонент 368", filial: "kuphg" },
  { id: "33369", name: "Абонент 369", filial: "kuphg" },
  { id: "33370", name: "Абонент 370", filial: "kuphg" },
  { id: "33371", name: "Абонент 371", filial: "kuphg" },
  { id: "33372", name: "Абонент 372", filial: "kuphg" },
  { id: "33373", name: "Абонент 373", filial: "kuphg" },
  { id: "33374", name: "Абонент 374", filial: "kuphg" },
  { id: "33375", name: "Абонент 375", filial: "kuphg" },
  { id: "33376", name: "Абонент 376", filial: "kuphg" },
  { id: "33377", name: "Абонент 377", filial: "kuphg" },
  { id: "33378", name: "Абонент 378", filial: "kuphg" },
  { id: "33379", name: "Абонент 379", filial: "kuphg" },
  { id: "33380", name: "Абонент 380", filial: "kuphg" },
  { id: "33381", name: "Абонент 381", filial: "kuphg" },
  { id: "33382", name: "Абонент 382", filial: "kuphg" },
  { id: "33383", name: "Абонент 383", filial: "kuphg" },
  { id: "33384", name: "Абонент 384", filial: "kuphg" },
  { id: "33385", name: "Абонент 385", filial: "kuphg" },
  { id: "33386", name: "Абонент 386", filial: "kuphg" },
  { id: "33387", name: "Абонент 387", filial: "kuphg" },
  { id: "33388", name: "Абонент 388", filial: "kuphg" },
  { id: "33389", name: "Абонент 389", filial: "kuphg" },
  { id: "33390", name: "Абонент 390", filial: "kuphg" },
  { id: "33391", name: "Абонент 391", filial: "kuphg" },
  { id: "33392", name: "Абонент 392", filial: "kuphg" },
  { id: "33393", name: "Абонент 393", filial: "kuphg" },
  { id: "33394", name: "Абонент 394", filial: "kuphg" },
  { id: "33395", name: "Абонент 395", filial: "kuphg" },
  { id: "33396", name: "Абонент 396", filial: "kuphg" },
  { id: "33397", name: "Абонент 397", filial: "kuphg" },
  { id: "33398", name: "Абонент 398", filial: "kuphg" },
  { id: "33399", name: "Абонент 399", filial: "kuphg" },
  { id: "33400", name: "Абонент 400", filial: "kuphg" },
  { id: "33401", name: "Абонент 401", filial: "kuphg" },
  { id: "33402", name: "Абонент 402", filial: "kuphg" },
  { id: "33403", name: "Абонент 403", filial: "kuphg" },
  { id: "33404", name: "Абонент 404", filial: "kuphg" },
  { id: "33405", name: "Абонент 405", filial: "kuphg" },
  { id: "33406", name: "Абонент 406", filial: "kuphg" },
  { id: "33407", name: "Абонент 407", filial: "kuphg" },
  { id: "33408", name: "Абонент 408", filial: "kuphg" },
  { id: "33409", name: "Абонент 409", filial: "kuphg" },
  { id: "33410", name: "Абонент 410", filial: "kuphg" },
  { id: "33411", name: "Абонент 411", filial: "kuphg" },
  { id: "33412", name: "Абонент 412", filial: "kuphg" },
  { id: "33413", name: "Абонент 413", filial: "kuphg" },
  { id: "33414", name: "Абонент 414", filial: "kuphg" },
  { id: "33415", name: "Абонент 415", filial: "kuphg" },
  { id: "33416", name: "Абонент 416", filial: "kuphg" },
  { id: "33417", name: "Абонент 417", filial: "kuphg" },
  { id: "33418", name: "Абонент 418", filial: "kuphg" },
  { id: "33419", name: "Абонент 419", filial: "kuphg" },
  { id: "33420", name: "Абонент 420", filial: "kuphg" },
  { id: "33421", name: "Абонент 421", filial: "kuphg" },
  { id: "33422", name: "Абонент 422", filial: "kuphg" },
  { id: "33423", name: "Абонент 423", filial: "kuphg" },
  { id: "33424", name: "Абонент 424", filial: "kuphg" },
  { id: "33425", name: "Абонент 425", filial: "kuphg" },
  { id: "33426", name: "Абонент 426", filial: "kuphg" },
  { id: "33427", name: "Абонент 427", filial: "kuphg" },
  { id: "33428", name: "Абонент 428", filial: "kuphg" },
  { id: "33429", name: "Абонент 429", filial: "kuphg" },
  { id: "33430", name: "Абонент 430", filial: "kuphg" },
  { id: "33431", name: "Абонент 431", filial: "kuphg" },
  { id: "33432", name: "Абонент 432", filial: "kuphg" },
  { id: "33433", name: "Абонент 433", filial: "kuphg" },
  { id: "33434", name: "Абонент 434", filial: "kuphg" },
  { id: "33435", name: "Абонент 435", filial: "kuphg" },
  { id: "33436", name: "Абонент 436", filial: "kuphg" },
  { id: "33437", name: "Абонент 437", filial: "kuphg" },
  { id: "33438", name: "Абонент 438", filial: "kuphg" },
  { id: "33439", name: "Абонент 439", filial: "kuphg" },
  { id: "33440", name: "Абонент 440", filial: "kuphg" },
  { id: "33441", name: "Абонент 441", filial: "kuphg" },
  { id: "33442", name: "Абонент 442", filial: "kuphg" },
  { id: "33443", name: "Абонент 443", filial: "kuphg" },
  { id: "33444", name: "Абонент 444", filial: "kuphg" },
  { id: "33445", name: "Абонент 445", filial: "kuphg" },
  { id: "33446", name: "Абонент 446", filial: "kuphg" },
  { id: "33447", name: "Абонент 447", filial: "kuphg" },
  { id: "33448", name: "Абонент 448", filial: "kuphg" },
  { id: "33449", name: "Абонент 449", filial: "kuphg" },
  { id: "33450", name: "Абонент 450", filial: "kuphg" },
  { id: "33451", name: "Абонент 451", filial: "kuphg" },
  { id: "33452", name: "Абонент 452", filial: "kuphg" },
  { id: "33453", name: "Абонент 453", filial: "kuphg" },
  { id: "33454", name: "Абонент 454", filial: "kuphg" },
  { id: "33455", name: "Абонент 455", filial: "kuphg" },
  { id: "33456", name: "Абонент 456", filial: "kuphg" },
  { id: "33457", name: "Абонент 457", filial: "kuphg" },
  { id: "33458", name: "Абонент 458", filial: "kuphg" },
  { id: "33459", name: "Абонент 459", filial: "kuphg" },
  { id: "33460", name: "Абонент 460", filial: "kuphg" },
  { id: "33461", name: "Абонент 461", filial: "kuphg" },
  { id: "33462", name: "Абонент 462", filial: "kuphg" },
  { id: "33463", name: "Абонент 463", filial: "kuphg" },
  { id: "33464", name: "Абонент 464", filial: "kuphg" },
  { id: "33465", name: "Абонент 465", filial: "kuphg" },
  { id: "33466", name: "Абонент 466", filial: "kuphg" },
  { id: "33467", name: "Абонент 467", filial: "kuphg" },
  { id: "33468", name: "Абонент 468", filial: "kuphg" },
  { id: "33469", name: "Абонент 469", filial: "kuphg" },
  { id: "33470", name: "Абонент 470", filial: "kuphg" },
  { id: "33471", name: "Абонент 471", filial: "kuphg" },
  { id: "33472", name: "Абонент 472", filial: "kuphg" },
  { id: "33473", name: "Абонент 473", filial: "kuphg" },
  { id: "33474", name: "Абонент 474", filial: "kuphg" },
  { id: "33475", name: "Абонент 475", filial: "kuphg" },
  { id: "33476", name: "Абонент 476", filial: "kuphg" },
  { id: "33477", name: "Абонент 477", filial: "kuphg" },
  { id: "33478", name: "Абонент 478", filial: "kuphg" },
  { id: "33479", name: "Абонент 479", filial: "kuphg" },
  { id: "33480", name: "Абонент 480", filial: "kuphg" },
  { id: "33481", name: "Абонент 481", filial: "kuphg" },
  { id: "33482", name: "Абонент 482", filial: "kuphg" },
  { id: "33483", name: "Абонент 483", filial: "kuphg" },
  { id: "33484", name: "Абонент 484", filial: "kuphg" },
  { id: "33485", name: "Абонент 485", filial: "kuphg" },
  { id: "33486", name: "Абонент 486", filial: "kuphg" },
  { id: "33487", name: "Абонент 487", filial: "kuphg" },
  { id: "33488", name: "Абонент 488", filial: "kuphg" },
  { id: "33489", name: "Абонент 489", filial: "kuphg" },
  { id: "33490", name: "Абонент 490", filial: "kuphg" },
  { id: "33491", name: "Абонент 491", filial: "kuphg" },
  { id: "33492", name: "Абонент 492", filial: "kuphg" },
  { id: "33493", name: "Абонент 493", filial: "kuphg" },
  { id: "33494", name: "Абонент 494", filial: "kuphg" },
  { id: "33495", name: "Абонент 495", filial: "kuphg" },
  { id: "33496", name: "Абонент 496", filial: "kuphg" },
  { id: "33497", name: "Абонент 497", filial: "kuphg" },
  { id: "33498", name: "Абонент 498", filial: "kuphg" },
  { id: "33499", name: "Абонент 499", filial: "kuphg" },
  { id: "33500", name: "Абонент 500", filial: "kuphg" },
  { id: "33501", name: "Абонент 501", filial: "kuphg" },
  { id: "33502", name: "Абонент 502", filial: "kuphg" },
  { id: "33503", name: "Абонент 503", filial: "kuphg" },
  { id: "33504", name: "Абонент 504", filial: "kuphg" },
  { id: "33505", name: "Абонент 505", filial: "kuphg" },
  { id: "33506", name: "Абонент 506", filial: "kuphg" },
  { id: "33507", name: "Абонент 507", filial: "kuphg" },
  { id: "33508", name: "Абонент 508", filial: "kuphg" },
  { id: "33509", name: "Абонент 509", filial: "kuphg" },
  { id: "33510", name: "Абонент 510", filial: "kuphg" },
  { id: "33511", name: "Абонент 511", filial: "kuphg" },
  { id: "33512", name: "Абонент 512", filial: "kuphg" },
  { id: "33513", name: "Абонент 513", filial: "kuphg" },
  { id: "33514", name: "Абонент 514", filial: "kuphg" },
  { id: "33515", name: "Абонент 515", filial: "kuphg" },
  { id: "33516", name: "Абонент 516", filial: "kuphg" },
  { id: "33517", name: "Абонент 517", filial: "kuphg" },
  { id: "33518", name: "Абонент 518", filial: "kuphg" },
  { id: "33519", name: "Абонент 519", filial: "kuphg" },
  { id: "33520", name: "Абонент 520", filial: "kuphg" },
  { id: "33521", name: "Абонент 521", filial: "kuphg" },
  { id: "33522", name: "Абонент 522", filial: "kuphg" },
  { id: "33523", name: "Абонент 523", filial: "kuphg" },
  { id: "33524", name: "Абонент 524", filial: "kuphg" },
  { id: "33525", name: "Абонент 525", filial: "kuphg" },
  { id: "33526", name: "Абонент 526", filial: "kuphg" },
  { id: "33527", name: "Абонент 527", filial: "kuphg" },
  { id: "33528", name: "Абонент 528", filial: "kuphg" },
  { id: "33529", name: "Абонент 529", filial: "kuphg" },
  { id: "33530", name: "Абонент 530", filial: "kuphg" },
  { id: "33531", name: "Абонент 531", filial: "kuphg" },
  { id: "33532", name: "Абонент 532", filial: "kuphg" },
  { id: "33533", name: "Абонент 533", filial: "kuphg" },
  { id: "33534", name: "Абонент 534", filial: "kuphg" },
  { id: "33535", name: "Абонент 535", filial: "kuphg" },
  { id: "33536", name: "Абонент 536", filial: "kuphg" },
  { id: "33537", name: "Абонент 537", filial: "kuphg" },
  { id: "33538", name: "Абонент 538", filial: "kuphg" },
  { id: "33539", name: "Абонент 539", filial: "kuphg" },
  { id: "33540", name: "Абонент 540", filial: "kuphg" },
  { id: "33541", name: "Абонент 541", filial: "kuphg" },
  { id: "33542", name: "Абонент 542", filial: "kuphg" },
  { id: "33543", name: "Абонент 543", filial: "kuphg" },
  { id: "33544", name: "Абонент 544", filial: "kuphg" },
  { id: "33545", name: "Абонент 545", filial: "kuphg" },
  { id: "33546", name: "Абонент 546", filial: "kuphg" },
  { id: "33547", name: "Абонент 547", filial: "kuphg" },
  { id: "33548", name: "Абонент 548", filial: "kuphg" },
  { id: "33549", name: "Абонент 549", filial: "kuphg" },
  { id: "33550", name: "Абонент 550", filial: "kuphg" },
  { id: "33551", name: "Абонент 551", filial: "kuphg" },
  { id: "33552", name: "Абонент 552", filial: "kuphg" },
  { id: "33553", name: "Абонент 553", filial: "kuphg" },
  { id: "33554", name: "Абонент 554", filial: "kuphg" },
  { id: "33555", name: "Абонент 555", filial: "kuphg" },
  { id: "33556", name: "Абонент 556", filial: "kuphg" },
  { id: "33557", name: "Абонент 557", filial: "kuphg" },
  { id: "33558", name: "Абонент 558", filial: "kuphg" },
  { id: "33559", name: "Абонент 559", filial: "kuphg" },
  { id: "33560", name: "Абонент 560", filial: "kuphg" },
  { id: "33561", name: "Абонент 561", filial: "kuphg" },
  { id: "33562", name: "Абонент 562", filial: "kuphg" },
  { id: "33563", name: "Абонент 563", filial: "kuphg" },
  { id: "33564", name: "Абонент 564", filial: "kuphg" },
  { id: "33565", name: "Абонент 565", filial: "kuphg" },
  { id: "33566", name: "Абонент 566", filial: "kuphg" },
  { id: "33567", name: "Абонент 567", filial: "kuphg" },
  { id: "33568", name: "Абонент 568", filial: "kuphg" },
  { id: "33569", name: "Абонент 569", filial: "kuphg" },
  { id: "33570", name: "Абонент 570", filial: "kuphg" },
  { id: "33571", name: "Абонент 571", filial: "kuphg" },
  { id: "33572", name: "Абонент 572", filial: "kuphg" },
  { id: "33573", name: "Абонент 573", filial: "kuphg" },
  { id: "33574", name: "Абонент 574", filial: "kuphg" },
  { id: "33575", name: "Абонент 575", filial: "kuphg" },
  { id: "33576", name: "Абонент 576", filial: "kuphg" },
  { id: "33577", name: "Абонент 577", filial: "kuphg" },
  { id: "33578", name: "Абонент 578", filial: "kuphg" },
  { id: "33579", name: "Абонент 579", filial: "kuphg" },
  { id: "33580", name: "Абонент 580", filial: "kuphg" },
  { id: "33581", name: "Абонент 581", filial: "kuphg" },
  { id: "33582", name: "Абонент 582", filial: "kuphg" },
  { id: "33583", name: "Абонент 583", filial: "kuphg" },
  { id: "33584", name: "Абонент 584", filial: "kuphg" },
  { id: "33585", name: "Абонент 585", filial: "kuphg" },
  { id: "33586", name: "Абонент 586", filial: "kuphg" },
  { id: "33587", name: "Абонент 587", filial: "kuphg" },
  { id: "33588", name: "Абонент 588", filial: "kuphg" },
  { id: "33589", name: "Абонент 589", filial: "kuphg" },
  { id: "33590", name: "Абонент 590", filial: "kuphg" },
  { id: "33591", name: "Абонент 591", filial: "kuphg" },
  { id: "33592", name: "Абонент 592", filial: "kuphg" },
  { id: "33593", name: "Абонент 593", filial: "kuphg" },
  { id: "33594", name: "Абонент 594", filial: "kuphg" },
  { id: "33595", name: "Абонент 595", filial: "kuphg" },
  { id: "33596", name: "Абонент 596", filial: "kuphg" },
  { id: "33597", name: "Абонент 597", filial: "kuphg" },
  { id: "33598", name: "Абонент 598", filial: "kuphg" },
  { id: "33599", name: "Абонент 599", filial: "kuphg" },
];

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(users));
}
const fetchUsers = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(JSON.parse(localStorage.getItem("users")));
    }, 2000);
  });
const fetchUsersPHG = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).filter(
          (user) => user.filial === "kuphg"
        )
      );
    }, 2000);
  });
const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).find((user) => user.id === id)
      );
    }, 1000);
  });
const fetchUsersUAVR = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(
        JSON.parse(localStorage.getItem("users")).filter(
          (user) => user.filial === "buavr"
        )
      );
    }, 2000);
  });
// const fetchUsers = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(users);
//     }, 2000);
//   });

// const fetchUsersPHG = () =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(users.filter((user) => user.filial === "kuphg"));
//     }, 2000);
//   });

// const getById = (id) =>
//   new Promise((resolve) => {
//     window.setTimeout(function () {
//       resolve(users.find((user) => user.id === id));
//     }, 2000);
//   });

export default { fetchUsers, fetchUsersPHG, fetchUsersUAVR, getById };
